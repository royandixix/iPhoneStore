<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Statistik dashboard
     */
    public function stats()
    {
        $totalProducts = Product::count();
        $totalStock = Product::sum('stock');
        $lowStock = Product::where('stock', '<', 10)->count();
        $outStock = Product::where('stock', 0)->count();

        // Total unit terjual dari order_items
        $totalSold = DB::table('order_items')->sum('quantity');

        return response()->json([
            'totalProducts' => $totalProducts,
            'totalStock'    => $totalStock,
            'lowStock'      => $lowStock,
            'outStock'      => $outStock,
            'totalSold'     => $totalSold,
        ]);
    }

    /**
     * Produk teratas
     */
    public function top()
    {
        $products = Product::withSum('orderItems', 'quantity')
            ->orderByDesc('order_items_sum_quantity')
            ->limit(5)
            ->get();

        $data = $products->map(function ($p) {
            return [
                'name'      => $p->name,
                'sold'      => $p->order_items_sum_quantity ?? 0,
                'total'     => $p->price * ($p->order_items_sum_quantity ?? 0),
                'image_url' => $p->image ? asset('storage/' . $p->image) : 'https://via.placeholder.com/48',
            ];
        });

        return response()->json($data);
    }

    /**
     * Data penjualan per bulan (placeholder)
     */
    public function salesData()
    {
        // Contoh dummy data 12 bulan
        $data = [
            ['month'=>'Jan','sold'=>10],
            ['month'=>'Feb','sold'=>15],
            ['month'=>'Mar','sold'=>12],
            ['month'=>'Apr','sold'=>20],
            ['month'=>'May','sold'=>18],
            ['month'=>'Jun','sold'=>25],
            ['month'=>'Jul','sold'=>22],
            ['month'=>'Aug','sold'=>30],
            ['month'=>'Sep','sold'=>28],
            ['month'=>'Oct','sold'=>35],
            ['month'=>'Nov','sold'=>40],
            ['month'=>'Dec','sold'=>38],
        ];

        return response()->json($data);
    }

    /**
     * CRUD Produk
     */
    public function index()
    {
        $products = Product::latest()->paginate(10);
        return view('admin.products.index', compact('products'));
    }

    public function create()
    {
        return view('admin.products.create');
    }

    public function store(Request $request)
    {
        $validated = $this->validateProduct($request);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        Product::create($validated);

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil ditambahkan');
    }

    public function edit(Product $product)
    {
        return view('admin.products.edit', compact('product'));
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

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil diupdate');
    }

    public function destroy(Product $product)
    {
        if ($product->image && Storage::disk('public')->exists($product->image)) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil dihapus');
    }

    /**
     * Validasi produk (dipakai di store & update)
     */
    protected function validateProduct(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'price'       => 'required|numeric|max:9999999999999.99',
            'stock'       => 'required|integer|min:0',
            'category'    => 'nullable|string|max:100',
            'label'       => 'nullable|string|max:50',
            'image'       => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $price = preg_replace('/[^0-9]/', '', $request->price);
        $validated['price'] = (int) $price;

        return $validated;
    }
}