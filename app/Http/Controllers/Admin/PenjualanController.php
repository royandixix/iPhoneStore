<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;

class PenjualanController extends Controller
{
    public function index()
    {
        $orders = Order::with('user')
            ->latest()
            ->get();

        $totalPenjualan = Order::sum('total');
        $totalOrder = Order::count();
        $completed = Order::where('status', 'completed')->count();
        $pending = Order::where('status', 'pending')->count();

        return view('admin.penjualan.index', compact(
            'orders',
            'totalPenjualan',
            'totalOrder',
            'completed',
            'pending'
        ));
    }
}