<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ProductsExport;
use Barryvdh\DomPDF\Facade\Pdf;


class LaporanController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('admin.laporan.index', compact('products'));
    }

    public function produkReview()
    {
        $products = Product::all();
        return view('admin.laporan.produk-review', compact('products'));
    }

    public function produkPdf()
    {
        $products = Product::all();
        $pdf = Pdf::loadView('admin.laporan.produk-pdf', compact('products'));
        return $pdf->download('laporan_produk.pdf');
    }

    public function produkExcel()
    {
        return Excel::download(new ProductsExport, 'laporan_produk.xlsx');
    }
}