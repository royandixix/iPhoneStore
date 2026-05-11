<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        $products = Product::latest()->get()->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'description' => $product->description, // ✅ penting
                'image' => $product->image
                    ? asset('storage/' . $product->image)
                    : 'https://via.placeholder.com/300'
            ];
        });

        return Inertia::render('User/Shop/Index', [
            'products' => $products
        ]);
    }
}
