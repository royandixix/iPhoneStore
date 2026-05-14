@extends('admin.layouts.app')

@section('title', 'Dashboard')

@section('content')
<div class="row">
    <div class="col-12">
        <div class="mb-6">
            <h1 class="fs-3 mb-1">Dashboard</h1>
            <p>Selamat datang di panel admin.</p>
        </div>
    </div>
</div>

{{-- ── STAT CARDS ──────────────────────────────────────────────────────── --}}
<div class="row g-3 mb-3">
    <div class="col-lg-3 col-12">
        <div class="card p-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-2">
            <div class="d-flex gap-3">
                <div class="icon-shape icon-md bg-primary text-white rounded-2">
                    <i class="ti ti-report-analytics fs-4"></i>
                </div>
                <div>
                    <h2 class="mb-3 fs-6">Total Penjualan</h2>
                    <h3 class="fw-bold mb-0">Rp {{ number_format($totalSales, 0, ',', '.') }}</h3>
                    <p class="text-primary mb-0 small">
                        {{ $salesGrowth >= 0 ? '+' : '' }}{{ $salesGrowth }}% dari bulan lalu
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-12">
        <div class="card p-4 bg-success bg-opacity-10 border border-success border-opacity-25 rounded-2">
            <div class="d-flex gap-3">
                <div class="icon-shape icon-md bg-success text-white rounded-2">
                    <i class="ti ti-repeat fs-4"></i>
                </div>
                <div>
                    <h2 class="mb-3 fs-6">Total Pembelian</h2>
                    <h3 class="fw-bold mb-0">Rp {{ number_format($totalPurchase, 0, ',', '.') }}</h3>
                    <p class="text-success mb-0 small">Semua status order</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-12">
        <div class="card p-4 bg-info bg-opacity-10 border border-info border-opacity-25 rounded-2">
            <div class="d-flex gap-3">
                <div class="icon-shape icon-md bg-info text-white rounded-2">
                    <i class="ti ti-currency-dollar fs-4"></i>
                </div>
                <div>
                    <h2 class="mb-3 fs-6">Total Pengeluaran</h2>
                    <h3 class="fw-bold mb-0">Rp {{ number_format($totalExpense, 0, ',', '.') }}</h3>
                    <p class="text-info mb-0 small">Diproses + dikirim</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-12">
        <div class="card p-4 bg-warning bg-opacity-10 border border-warning border-opacity-25 rounded-2">
            <div class="d-flex gap-3">
                <div class="icon-shape icon-md bg-warning text-white rounded-2">
                    <i class="ti ti-notes fs-4"></i>
                </div>
                <div>
                    <h2 class="mb-3 fs-6">Tagihan Jatuh Tempo</h2>
                    <h3 class="fw-bold mb-0">Rp {{ number_format($totalDue, 0, ',', '.') }}</h3>
                    <p class="text-warning mb-0 small">Order masih pending</p>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- ── SUMMARY CARDS ───────────────────────────────────────────────────── --}}
<div class="row g-3 mb-3">
    <div class="col-lg-4 col-12">
        <div class="card">
            <div class="card-body p-4">
                <div class="d-flex justify-content-between border-bottom pb-5 mb-3">
                    <div>
                        <h3 class="fw-bold h4">Rp {{ number_format($totalProfit, 0, ',', '.') }}</h3>
                        <span>Total Keuntungan</span>
                    </div>
                    <i class="ti ti-layers-subtract fs-1 text-primary"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted"><span class="text-success">Order selesai</span></div>
                    <a href="#" class="link-primary text-decoration-underline">Lihat</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-12">
        <div class="card">
            <div class="card-body p-4">
                <div class="d-flex justify-content-between border-bottom pb-5 mb-3">
                    <div>
                        <h3 class="fw-bold h4">Rp {{ number_format($totalRefund, 0, ',', '.') }}</h3>
                        <span>Total Pengembalian Pembayaran</span>
                    </div>
                    <i class="ti ti-credit-card fs-1 text-danger"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted"><span class="text-danger">Order dibatalkan</span></div>
                    <a href="#" class="link-primary text-decoration-underline">Lihat</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-12">
        <div class="card">
            <div class="card-body p-4">
                <div class="d-flex justify-content-between border-bottom pb-5 mb-3">
                    <div>
                        <h3 class="fw-bold h4">Rp {{ number_format($totalExpense2, 0, ',', '.') }}</h3>
                        <span>Total Pengeluaran</span>
                    </div>
                    <i class="ti ti-cash-banknote fs-1 text-warning"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted"><span class="text-warning">Diproses + dikirim</span></div>
                    <a href="#" class="link-primary text-decoration-underline">Lihat</a>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- ── CHART + RINGKASAN ───────────────────────────────────────────────── --}}
<div class="row g-3 mb-3">
    <div class="col-12 col-lg-6">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center bg-transparent px-4 py-3">
                <h3 class="h5 mb-0">Penjualan vs Pembelian</h3>
                <select class="form-select form-select-sm" style="width:auto">
                    <option selected>Tahun Ini</option>
                    <option>Bulan Ini</option>
                    <option>Minggu Ini</option>
                </select>
            </div>
            <div class="card-body p-4">
                <div id="salesPurchaseChart"></div>
            </div>
        </div>
    </div>
    <div class="col-12 col-lg-6">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center bg-transparent px-4 py-3">
                <h3 class="h5 mb-0">Informasi Umum</h3>
                <select class="form-select form-select-sm" style="width:auto">
                    <option selected>6 Bulan Terakhir</option>
                    <option>Bulan Ini</option>
                    <option>Minggu Ini</option>
                </select>
            </div>
            <div class="card-body p-4">
                <h3 class="h6">Ringkasan Pelanggan</h3>
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div id="customerChart"></div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-6 border-end text-center">
                                <h2 class="mb-1">{{ number_format($newBuyers) }}</h2>
                                <p class="text-success mb-2">Pembeli Baru</p>
                                <span class="badge bg-success">
                                    <i class="ti ti-arrow-up-left me-1"></i>Bulan Ini
                                </span>
                            </div>
                            <div class="col-6 text-center">
                                <h2 class="mb-1">{{ number_format($returningBuyers) }}</h2>
                                <p class="text-warning mb-2">Pembeli Kembali</p>
                                <span class="badge bg-success d-inline-flex align-items-center">
                                    <i class="ti ti-arrow-up-left me-1"></i>Repeat
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row text-center border-top mt-4 pt-4">
                    <div class="col-4 border-end">
                        {{-- Tidak ada model Supplier, tampilkan total produk sebagai referensi --}}
                        <h3 class="fw-bold mb-2">{{ number_format(App\Models\Product::count()) }}</h3>
                        <small class="text-secondary">Produk</small>
                    </div>
                    <div class="col-4 border-end">
                        <h3 class="fw-bold mb-2">{{ number_format($totalCustomers) }}</h3>
                        <small class="text-secondary">Pelanggan</small>
                    </div>
                    <div class="col-4">
                        <h3 class="fw-bold mb-2">{{ number_format($totalOrderCount) }}</h3>
                        <small class="text-secondary">Pesanan</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- ── 3 LIST CARDS ────────────────────────────────────────────────────── --}}
<div class="row g-3">

    {{-- Produk Terlaris --}}
    <div class="col-lg-4">
        <div class="card h-100">
            <div class="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3">
                <h4 class="mb-0 h5">Produk Terlaris</h4>
                <button class="btn btn-sm btn-outline-secondary"><i class="ti ti-calendar"></i> Hari Ini</button>
            </div>
            <ul class="list-group list-group-flush">
                @forelse($topProducts as $p)
                <li class="list-group-item d-flex align-items-center gap-3">
                    <img
                        src="{{ $p->image ? asset('storage/' . $p->image) : asset('assets/dist/assets/images/product-1.png') }}"
                        class="rounded"
                        width="48"
                        alt="{{ $p->name }}"
                    >
                    <div class="flex-grow-1">
                        <p class="mb-1">{{ $p->name }}</p>
                        <div class="d-flex align-items-center gap-2 text-muted">
                            <small class="fw-semibold">Rp {{ number_format($p->price, 0, ',', '.') }}</small>
                            <small>•</small>
                            <small>{{ number_format($p->sold) }} Unit</small>
                        </div>
                    </div>
                    <span class="badge bg-{{ $p->badge }}-subtle text-{{ $p->badge }} border border-{{ $p->badge }}">
                        {{ $p->pct }}
                    </span>
                </li>
                @empty
                <li class="list-group-item text-muted text-center py-3">Belum ada data produk terlaris.</li>
                @endforelse
            </ul>
        </div>
    </div>

    {{-- Stok Hampir Habis --}}
    <div class="col-lg-4">
        <div class="card h-100">
            <div class="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3">
                <h4 class="mb-0 h5">Stok Hampir Habis</h4>
                <a href="#" class="small text-primary text-decoration-underline">Lihat Semua</a>
            </div>
            <ul class="list-group list-group-flush">
                @forelse($lowStock as $p)
                <li class="list-group-item d-flex align-items-center gap-3">
                    <img
                        src="{{ $p->image ? asset('storage/' . $p->image) : asset('assets/dist/assets/images/product-1.png') }}"
                        class="rounded"
                        width="48"
                        alt="{{ $p->name }}"
                    >
                    <div class="flex-grow-1">
                        <p class="mb-1">{{ $p->name }}</p>
                        <small>ID: #{{ str_pad($p->id, 6, '0', STR_PAD_LEFT) }}</small>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <span class="fw-semibold text-primary">{{ str_pad($p->stock, 2, '0', STR_PAD_LEFT) }}</span>
                        <small class="text-muted">Tersisa</small>
                    </div>
                </li>
                @empty
                <li class="list-group-item text-muted text-center py-3">Semua stok aman.</li>
                @endforelse
            </ul>
        </div>
    </div>

    {{-- Penjualan Terbaru --}}
    <div class="col-lg-4">
        <div class="card h-100">
            <div class="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3">
                <h4 class="mb-0 h5">Penjualan Terbaru</h4>
                <button class="btn btn-sm btn-outline-secondary"><i class="ti ti-calendar-event"></i> Mingguan</button>
            </div>
            <ul class="list-group list-group-flush">
                @php
                    $statusMap = [
                        'pending'    => ['badge' => 'warning', 'label' => 'Menunggu'],
                        'processing' => ['badge' => 'primary', 'label' => 'Diproses'],
                        'shipped'    => ['badge' => 'info',    'label' => 'Dikirim'],
                        'completed'  => ['badge' => 'success', 'label' => 'Selesai'],
                        'cancelled'  => ['badge' => 'danger',  'label' => 'Dibatalkan'],
                    ];
                @endphp
                @forelse($recentSales as $s)
                @php
                    $orderStatus = $s->order->status ?? 'pending';
                    $statusInfo  = $statusMap[$orderStatus] ?? ['badge' => 'secondary', 'label' => ucfirst($orderStatus)];
                @endphp
                <li class="list-group-item d-flex align-items-center gap-3">
                    <img
                        src="{{ $s->product && $s->product->image ? asset('storage/' . $s->product->image) : asset('assets/dist/assets/images/product-1.png') }}"
                        class="rounded"
                        width="48"
                        alt="{{ $s->product->name ?? '-' }}"
                    >
                    <div class="flex-grow-1">
                        <p class="mb-1">{{ $s->product->name ?? 'Produk dihapus' }}</p>
                        <div class="d-flex align-items-center gap-2 text-muted">
                            <small class="fw-semibold">{{ $s->product->categoryData->name ?? ($s->product->category ?? '-') }}</small>
                            <small>•</small>
                            <small>Rp {{ number_format($s->price, 0, ',', '.') }}</small>
                        </div>
                    </div>
                    <span class="badge bg-{{ $statusInfo['badge'] }}-subtle text-{{ $statusInfo['badge'] }}">
                        {{ $statusInfo['label'] }}
                    </span>
                </li>
                @empty
                <li class="list-group-item text-muted text-center py-3">Belum ada penjualan terbaru.</li>
                @endforelse
            </ul>
        </div>
    </div>

</div>

<link href="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/PNotify.css" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/BrightTheme.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/PNotify.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@pnotify/mobile@5.2.0/dist/PNotifyMobile.js"></script>

<style>
.pnotify-container.custom-success.pnotify-type-success {
    background-color: #245824 !important;
    color: #ffffff !important;
}
.pnotify-container.custom-success.pnotify-type-success .pnotify-title,
.pnotify-container.custom-success.pnotify-type-success .pnotify-text,
.pnotify-container.custom-success.pnotify-type-success .pnotify-icon {
    color: #ffffff !important;
    text-shadow: none !important;
}
.pnotify-container.custom-success.pnotify-type-success .pnotify-closer,
.pnotify-container.custom-success.pnotify-type-success .pnotify-sticker {
    color: #ffffff !important;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
    const pnotifyOptions = {
        delay: 3000,
        closer: true,
        sticker: false,
        modules: { Mobile: { swipeDismiss: true } }
    };

    @if(session('success'))
        PNotify.success(Object.assign({}, pnotifyOptions, {
            title: 'Success!',
            text: "{{ session('success') }}",
            addClass: 'custom-success'
        }));
    @endif

    @if(session('error'))
        PNotify.error(Object.assign({}, pnotifyOptions, {
            title: 'Error!',
            text: "{{ session('error') }}"
        }));
    @endif
});
</script>
@endsection