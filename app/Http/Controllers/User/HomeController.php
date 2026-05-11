<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // 🔥 DEBUG LOGIN (hapus nanti kalau sudah normal)
        // dd(Auth::user());

        $user = Auth::user();

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

            // 🔥 PENTING: kirim auth manual (opsional backup)
            'auth' => [
                'user' => $user ? [
                    'id'    => $user->id,
                    'name'  => $user->name,
                    'email' => $user->email,
                    'role'  => $user->role,
                ] : null,
            ],
        ]);
    }
}