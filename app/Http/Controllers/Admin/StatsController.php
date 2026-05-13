<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;

class StatsController extends Controller
{
    public function productStats()
    {
        return response()->json([
            'totalProducts' => Product::count(),
            'totalSold' => Product::sum('sold'),
            'lowStock' => Product::where('stock', '<=', 5)->count(),
            'outStock' => Product::where('stock', 0)->count(),
        ]);
    }

    public function topProducts()
    {
        return Product::orderBy('sold', 'desc')
            ->limit(5)
            ->get()
            ->map(function ($p) {
                return [
                    'name' => $p->name,
                    'sold' => $p->sold,
                    'total' => $p->price * $p->sold,
                    'image_url' => $p->image
                        ? asset('storage/' . $p->image)
                        : 'https://via.placeholder.com/100'
                ];
            });
    }

    public function salesData()
    {
        $data = [];

        for ($i = 1; $i <= 12; $i++) {
            $data[] = [
                'month' => date('M', mktime(0, 0, 0, $i, 1)),
                'sold' => rand(10, 100),
            ];
        }

        return response()->json($data);
    }
}