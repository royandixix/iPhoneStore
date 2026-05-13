<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ReportController extends Controller
{
    public function productReview()
    {
        return view('admin.laporan.produk-review', [
            'products' => Product::latest()->get()
        ]);
    }

    public function productPdf()
    {
        return response()->json([
            'message' => 'PDF ready'
        ]);
    }
}