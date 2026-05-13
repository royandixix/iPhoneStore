<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Homepage
     */
    public function index()
    {
        $products = Product::latest()
            ->take(4)
            ->get()
            ->map(function ($p) {
                return [
                    'id'          => $p->id,
                    'name'        => $p->name,
                    'description' => $p->description,
                    'image'       => $p->image
                        ? asset('storage/' . $p->image)
                        : 'https://placehold.co/400x400',
                    'label'       => $p->label,
                    'price'       => $p->price,
                ];
            });

        return Inertia::render('User/home/Home', [
            'products' => $products,
        ]);
    }

    /**
     * Shop page (🔥 INI YANG KEMARIN ERROR)
     */
    public function shop()
    {
        $products = Product::latest()
            ->get()
            ->map(function ($p) {
                return [
                    'id'          => $p->id,
                    'name'        => $p->name,
                    'description' => $p->description,
                    'image'       => $p->image
                        ? asset('storage/' . $p->image)
                        : 'https://placehold.co/400x400',
                    'label'       => $p->label,
                    'price'       => $p->price,
                ];
            });

        return Inertia::render('User/Shop/Index', [
            'products' => $products,
        ]);
    }
}