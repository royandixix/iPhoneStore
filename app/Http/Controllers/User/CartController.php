<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index()
    {
        $cart = Cart::with('items.product')
            ->where('user_id', Auth::id())
            ->first();

        return inertia('User/Cart/Index', [
            'cart' => $cart
        ]);
    }

    public function add(Request $request)
    {
        $cart = Cart::firstOrCreate([
            'user_id' => Auth::id()
        ]);

        $item = CartItem::where([
            'cart_id' => $cart->id,
            'product_id' => $request->product_id,
            'size' => $request->size,
            'color' => $request->color,
        ])->first();

        if ($item) {
            $item->increment('quantity');
        } else {
            CartItem::create([
                'cart_id' => $cart->id,
                'product_id' => $request->product_id,
                'size' => $request->size,
                'color' => $request->color,
                'quantity' => 1,
            ]);
        }

        return back();
    }
}