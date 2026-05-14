<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        // ── STAT CARDS (baris 1) ────────────────────────────────────────────
        // Total Penjualan: semua order yang sudah selesai
        $totalSales = Order::where('status', 'completed')->sum('total');

        // Total Pembelian: semua order (semua status)
        $totalPurchase = Order::sum('total');

        // Total Pengeluaran: order yang sedang diproses + dikirim
        $totalExpense = Order::whereIn('status', ['processing', 'shipped'])->sum('total');

        // Tagihan Jatuh Tempo: order yang masih pending
        $totalDue = Order::where('status', 'pending')->sum('total');

        // Persentase vs bulan lalu (month-over-month)
        $lastMonth = now()->subMonth();

        $salesLastMonth = Order::where('status', 'completed')
            ->whereYear('created_at', $lastMonth->year)
            ->whereMonth('created_at', $lastMonth->month)
            ->sum('total');

        $salesThisMonth = Order::where('status', 'completed')
            ->whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->sum('total');

        $salesGrowth = $salesLastMonth > 0
            ? round((($salesThisMonth - $salesLastMonth) / $salesLastMonth) * 100)
            : 0;

        // ── SUMMARY CARDS (baris 2) ─────────────────────────────────────────
        $totalProfit   = Order::where('status', 'completed')->sum('total');
        $totalRefund   = Order::where('status', 'cancelled')->sum('total');
        $totalExpense2 = Order::whereIn('status', ['processing', 'shipped'])->sum('total');

        // ── RINGKASAN PELANGGAN ─────────────────────────────────────────────
        // Pembeli baru: user (role=user) yang daftar bulan ini
        $newBuyers = User::where('role', 'user')
            ->whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->count();

        // Pembeli kembali: user dengan lebih dari 1 order
        $returningBuyers = DB::table('orders')
            ->select('user_id')
            ->groupBy('user_id')
            ->havingRaw('COUNT(id) > 1')
            ->get()
            ->count();

        $totalCustomers  = User::where('role', 'user')->count();
        $totalOrderCount = Order::count();

        // ── PRODUK TERLARIS ─────────────────────────────────────────────────
        $topProducts  = Product::orderByDesc('sold')->take(5)->get();
        $totalSoldTop = $topProducts->sum('sold') ?: 1; // hindari division by zero

        $badgeColors = ['danger', 'primary', 'info', 'success', 'warning'];

        // Tambahkan atribut badge & pct ke setiap produk (tidak mengubah model)
        $topProducts = $topProducts->values()->map(function ($product, $index) use ($totalSoldTop, $badgeColors) {
            $product->badge = $badgeColors[$index % count($badgeColors)];
            $product->pct   = $totalSoldTop > 0
                ? round(($product->sold / $totalSoldTop) * 100) . '%'
                : '0%';
            return $product;
        });

        // ── STOK HAMPIR HABIS ───────────────────────────────────────────────
        $lowStock = Product::where('stock', '<', 10)
            ->orderBy('stock')
            ->take(5)
            ->get();

        // ── PENJUALAN TERBARU ───────────────────────────────────────────────
        // Ambil 5 order_item terbaru beserta relasi product & order
        $recentSales = OrderItem::with(['product', 'order'])
            ->latest()
            ->take(5)
            ->get();

        return view('admin.dashboard.index', compact(
            // Stat cards
            'totalSales',
            'totalPurchase',
            'totalExpense',
            'totalDue',
            'salesGrowth',
            // Summary cards
            'totalProfit',
            'totalRefund',
            'totalExpense2',
            // Pelanggan
            'newBuyers',
            'returningBuyers',
            'totalCustomers',
            'totalOrderCount',
            // List
            'topProducts',
            'lowStock',
            'recentSales',
        ));
    }
}