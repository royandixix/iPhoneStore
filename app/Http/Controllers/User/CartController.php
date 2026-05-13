<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        return inertia('User/Cart/Index', [
            'cart' => session()->get('cart', [])
        ]);
    }

    public function add(Request $request)
    {
        // ✅ VALIDASI BIAR AMAN
        $request->validate([
            'product_id' => 'required',
            'size' => 'required',
            'color' => 'required',
        ]);

        $cart = session()->get('cart', []);

        $key = $request->product_id . '-' . $request->size . '-' . $request->color;

        if (isset($cart[$key])) {
            $cart[$key]['quantity']++;
        } else {
            $cart[$key] = [
                'product_id' => $request->product_id,
                'size' => $request->size,
                'color' => $request->color,
                'quantity' => 1,
            ];
        }

        session()->put('cart', $cart);

        // ✅ lebih aman daripada back() untuk Inertia
        return response()->json([
            'message' => 'Product added to cart',
            'cart' => $cart
        ]);
    }

    public function remove(Request $request)
    {
        $cart = session()->get('cart', []);

        $key = $request->product_id . '-' . $request->size . '-' . $request->color;

        if (isset($cart[$key])) {
            unset($cart[$key]);
        }

        session()->put('cart', $cart);

        return response()->json([
            'message' => 'Item removed',
            'cart' => $cart
        ]);
    }

    public function update(Request $request)
    {
        $cart = session()->get('cart', []);

        $key = $request->product_id . '-' . $request->size . '-' . $request->color;

        if (isset($cart[$key])) {
            $cart[$key]['quantity'] = max(1, $request->quantity);
        }

        session()->put('cart', $cart);

        return response()->json([
            'message' => 'Cart updated',
            'cart' => $cart
        ]);
    }
}