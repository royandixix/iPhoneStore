@extends('admin.layouts.app')
@section('title', 'Edit Product')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                    <div>
                        <h1 class="fs-3 mb-1">Edit Produk</h1>
                        <p class="mb-0">Update data produk accessories</p>
                    </div>
                    <div>
                        <a href="{{ route('admin.products.accessories.index') }}" class="btn btn-primary">
                            Kembali ke Produk
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body p-4">

                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul class="mb-0">
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        <form action="{{ route('admin.products.accessories.update', $product->id) }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PUT')

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Nama Produk</label>
                                    <input type="text" name="name" class="form-control"
                                        value="{{ old('name', $product->name) }}" required>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Kategori</label>
                                    <select name="category" class="form-control">
                                        <option value="accessories" {{ $product->category == 'accessories' ? 'selected' : '' }}>
                                            Accessories
                                        </option>
                                        <option value="handphone" {{ $product->category == 'handphone' ? 'selected' : '' }}>
                                            Handphone
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Harga</label>
                                    <input type="text" id="price_formatted" class="form-control" required>
                                    <input type="hidden" name="price" id="price">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Stok</label>
                                    <input type="number" name="stock" class="form-control"
                                        value="{{ old('stock', $product->stock) }}" required>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Label</label>
                                <input type="text" name="label" class="form-control"
                                    placeholder="contoh: AirPods / Charger / Case"
                                    value="{{ old('label', $product->label) }}">
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Gambar Saat Ini</label><br>
                                <img id="current-image"
                                    src="{{ $product->image ? asset('storage/' . $product->image) : asset('assets/dist/assets/images/product-1.png') }}"
                                    style="max-width:200px;border-radius:10px;">
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Ganti Gambar</label>
                                <input type="file" name="image" id="image" class="form-control">

                                <div class="mt-3">
                                    <img id="preview-image" src="" alt="Preview"
                                        style="max-width:200px;display:none;border-radius:10px;">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Deskripsi</label>
                                <textarea name="description" class="form-control" rows="4">{{ old('description', $product->description) }}</textarea>
                            </div>

                            <div class="d-flex gap-2">
                                <button type="submit" class="btn btn-primary">Update</button>
                                <a href="{{ route('admin.products.accessories.index') }}" class="btn btn-secondary">
                                    Batal
                                </a>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
<script>
document.addEventListener('DOMContentLoaded', function () {

    const priceInput = document.getElementById('price_formatted');
    const priceHidden = document.getElementById('price');

    function formatRupiah(value) {
        let number = String(value || '').replace(/\D/g, '');
        if (number === '') number = '0';
        return 'Rp ' + new Intl.NumberFormat('id-ID').format(number);
    }

    const initialPrice = '{{ $product->price }}';
    priceHidden.value = initialPrice;
    priceInput.value = formatRupiah(initialPrice);

    priceInput.addEventListener('input', function (e) {
        const raw = e.target.value.replace(/\D/g, '');
        priceHidden.value = raw;
        e.target.value = formatRupiah(raw);
    });

    const inputImage = document.getElementById('image');
    const preview = document.getElementById('preview-image');

    if (inputImage) {
        inputImage.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    preview.setAttribute('src', e.target.result);
                    preview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    }

});
</script>
@endpush