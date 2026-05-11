@extends('admin.layouts.app')
@section('title', 'Products')

@section('content')
    <div class="container-fluid">

        <div class="row mb-4">
            <div class="col-12 d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div>
                    <h1 class="fs-3 mb-1">Halaman Produk</h1>
                    <p class="mb-0">Kelola inventaris produk Anda dengan mudah</p>
                </div>
                <div>
                    <a href="{{ route('admin.products.create') }}" class="btn btn-primary">
                        Tambah Produk
                    </a>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-12">
                @include('admin.components.product-stats')
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                {{-- Input Pencarian --}}
                @include('admin.components.search')

                <div class="d-flex gap-2 flex-wrap">
                    <a href="#" class="btn btn-soft-primary d-flex align-items-center gap-1">
                        <i class="ti ti-filter fs-4"></i> Filter
                    </a>

                    <a href="{{ route('admin.laporan.produk.excel') }}"
                        class="btn btn-outline-success d-flex align-items-center gap-1">
                        <i class="ti ti-file-excel fs-4"></i> Excel
                    </a>

                    <a href="{{ route('admin.laporan.produk.review') }}"
                        class="btn btn-outline-danger d-flex align-items-center gap-1">
                        <i class="ti ti-file-pdf fs-4"></i> PDF
                    </a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm border-0">
                    <div class="table-responsive">
                        <table class="table mb-0 text-nowrap table-hover">
                            <thead class="table-light border-light">
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Label</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="product-table-body">
                                @forelse ($products as $product)
                                    <tr class="align-middle">
                                        <td>
                                            <img src="{{ $product->image ? asset('storage/' . $product->image) : asset('assets/dist/assets/images/product-1.png') }}"
                                                class="avatar avatar-md rounded" alt="{{ $product->name }}"
                                                style="width: 40px; height: 40px; object-fit: cover;">
                                        </td>
                                        <td>
                                            <a href="#" data-bs-toggle="modal"
                                                data-bs-target="#productModal{{ $product->id }}">
                                                {{ $product->name }}
                                            </a>
                                        </td>
                                        <td>{{ $product->category ?? '-' }}</td>
                                        <td>{{ $product->label ?? '-' }}</td>
                                        <td>Rp {{ number_format($product->price, 0, ',', '.') }}</td>
                                        <td>{{ $product->stock }}</td>
                                        <td>
                                            <a href="{{ route('admin.products.edit', $product->id) }}">
                                                <i class="ti ti-edit"></i>
                                            </a>
                                            <form action="{{ route('admin.products.destroy', $product->id) }}"
                                                method="POST" class="d-inline">
                                                @csrf
                                                @method('DELETE')
                                                <button type="button"
                                                    class="border-0 bg-transparent p-0 link-danger btn-delete">
                                                    <i class="ti ti-trash ms-2"></i>
                                                </button>
                                            </form>
                                        </td>
                                    </tr>

                                    <div class="modal fade" id="productModal{{ $product->id }}" tabindex="-1"
                                        aria-labelledby="productModalLabel{{ $product->id }}" aria-hidden="true">
                                        <div class="modal-dialog modal-lg modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="productModalLabel{{ $product->id }}">
                                                        {{ $product->name }}
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-5 mb-3 mb-md-0">
                                                            <img src="{{ $product->image ? asset('storage/' . $product->image) : asset('assets/dist/assets/images/product-1.png') }}"
                                                                class="img-fluid rounded" alt="{{ $product->name }}">
                                                        </div>
                                                        <div class="col-md-7">
                                                            <p><strong>Category:</strong> {{ $product->category ?? '-' }}
                                                            </p>
                                                            <p><strong>Label:</strong> {{ $product->label ?? '-' }}</p>
                                                            <p><strong>Price:</strong> Rp
                                                                {{ number_format($product->price, 0, ',', '.') }}</p>
                                                            <p><strong>Stock:</strong> {{ $product->stock }}</p>
                                                            <hr>
                                                            <p>{{ $product->description ?? '-' }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @empty
                                    <tr>
                                        <td colspan="7" class="text-center py-4 text-muted">Belum ada produk</td>
                                    </tr>
                                @endforelse
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="7">
                                        <div class="d-flex justify-content-end p-2">
                                            {{ $products->links() }}
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                @include('admin.components.confirm-delete')
                @include('admin.components.alert-success')
                @include('admin.components.alert-error')
            </div>
        </div>

    </div>
@endsection
