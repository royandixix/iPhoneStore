<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function stats()
    {
        return response()->json([
            'totalProducts' => Product::count(),
            'totalStock'    => Product::sum('stock'),
            'lowStock'      => Product::where('stock', '<', 10)->count(),
            'outStock'      => Product::where('stock', 0)->count(),
            'totalSold'     => DB::table('order_items')->sum('quantity'),
        ]);
    }

    public function top()
    {
        $products = Product::withSum('orderItems', 'quantity')
            ->orderByDesc('order_items_sum_quantity')
            ->limit(5)
            ->get();

        return response()->json(
            $products->map(function ($p) {
                return [
                    'name'      => $p->name,
                    'sold'      => $p->order_items_sum_quantity ?? 0,
                    'total'     => $p->price * ($p->order_items_sum_quantity ?? 0),
                    'image_url' => $p->image
                        ? asset('storage/' . $p->image)
                        : 'https://via.placeholder.com/48',
                ];
            })
        );
    }

    public function index()
    {
        $products = Product::where('category', 'handphone')
            ->latest()
            ->paginate(10);

        return view('admin.products.handphone.index', compact('products'));
    }

    public function accessoriesIndex()
    {
        $products = Product::where('category', 'accessories')
            ->latest()
            ->paginate(10);

        return view('admin.products.accessories.index', compact('products'));
    }

    public function create()
    {
        if (request()->is('admin/products/accessories*')) {
            return view('admin.products.accessories.create');
        }

        return view('admin.products.handphone.create');
    }

    public function store(Request $request)
    {
        $validated = $this->validateProduct($request);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        Product::create($validated);

        return redirect()->route(
            $validated['category'] === 'accessories'
                ? 'admin.products.accessories.index'
                : 'admin.products.handphone.index'
        )->with('success', 'Produk berhasil ditambahkan');
    }

    public function edit(Product $product)
    {
        if ($product->category === 'accessories') {
            return view('admin.products.accessories.edit', compact('product'));
        }

        return view('admin.products.handphone.edit', compact('product'));
    }

    public function update(Request $request, Product $product)
    {
        $validated = $this->validateProduct($request);

        if ($request->hasFile('image')) {
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
            }

            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        $product->update($validated);

        return redirect()->route(
            $product->category === 'accessories'
                ? 'admin.products.accessories.index'
                : 'admin.products.handphone.index'
        )->with('success', 'Produk berhasil diupdate');
    }

    public function destroy(Product $product)
    {
        if ($product->image && Storage::disk('public')->exists($product->image)) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->route(
            $product->category === 'accessories'
                ? 'admin.products.accessories.index'
                : 'admin.products.handphone.index'
        )->with('success', 'Produk berhasil dihapus');
    }

    protected function validateProduct(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'price'       => 'required|numeric|max:9999999999999.99',
            'stock'       => 'required|integer|min:0',
            'category'    => 'required|string|max:100',
            'label'       => 'nullable|string|max:50',
            'image'       => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $validated['price'] = (int) preg_replace('/[^0-9]/', '', $request->price);

        return $validated;
    }
}