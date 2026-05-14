<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['user', 'orderItems.product'])
            ->latest()
            ->get();

        $topProducts = Product::orderByDesc('sold')
            ->take(5)
            ->get();

        $totalRevenue = $orders->sum('total');
        $totalOrders = $orders->count();
        $pendingOrders = $orders->where('status', 'pending')->count();
        $completedOrders = $orders->where('status', 'completed')->count();

        return view('admin.orders.index', compact(
            'orders',
            'topProducts',
            'totalRevenue',
            'totalOrders',
            'pendingOrders',
            'completedOrders'
        ));
    }

    public function show($id)
    {
        $order = Order::with(['user', 'orderItems.product'])
            ->findOrFail($id);

        return view('admin.orders.show', compact('order'));
    }

    public function edit($id)
    {
        $order = Order::with('user')->findOrFail($id);

        return view('admin.orders.edit', compact('order'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'status' => 'required',
            'shipping_address' => 'required'
        ]);

        $order = Order::findOrFail($id);

        $order->update([
            'status' => $request->status,
            'shipping_address' => $request->shipping_address
        ]);

        return redirect()
            ->route('admin.orders.index')
            ->with('success', 'Order updated successfully');
    }

    public function destroy($id)
    {
        $order = Order::findOrFail($id);

        $order->delete();

        return redirect()
            ->route('admin.orders.index')
            ->with('success', 'Order deleted successfully');
    }
}
