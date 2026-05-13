<?php $__env->startSection('title', 'Dashboard'); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
    <div class="col-12">
        <div class="mb-6">
            <h1 class="fs-3 mb-1">Dashboard</h1>
            <p>Selamat datang di panel admin.</p>
        </div>
    </div>
</div>

<div class="row g-3 mb-3">
    <div class="col-lg-3 col-12">
        <div class="card p-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-2">
            <div class="d-flex gap-3">
                <div class="icon-shape icon-md bg-primary text-white rounded-2">
                    <i class="ti ti-report-analytics fs-4"></i>
                </div>
                <div>
                    <h2 class="mb-3 fs-6">Total Penjualan</h2>
                    <h3 class="fw-bold mb-0">Rp 25.000.000</h3>
                    <p class="text-primary mb-0 small">+5% dari bulan lalu</p>
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
                    <h3 class="fw-bold mb-0">Rp 18.000.000</h3>
                    <p class="text-success mb-0 small">+22% dari bulan lalu</p>
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
                    <h3 class="fw-bold mb-0">Rp 9.000.000</h3>
                    <p class="text-info mb-0 small">+10% dari bulan lalu</p>
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
                    <h3 class="fw-bold mb-0">Rp 25.000.000</h3>
                    <p class="text-warning mb-0 small">+35% dari bulan lalu</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row g-3 mb-3">
    <div class="col-lg-4 col-12">
        <div class="card">
            <div class="card-body p-4">
                <div class="d-flex justify-content-between border-bottom pb-5 mb-3">
                    <div>
                        <h3 class="fw-bold h4">Rp 25.458.000</h3>
                        <span>Total Keuntungan</span>
                    </div>
                    <i class="ti ti-layers-subtract fs-1 text-primary"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted"><span class="text-success">+35%</span> vs Bulan Lalu</div>
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
                        <h3 class="fw-bold h4">Rp 45.458.000</h3>
                        <span>Total Pengembalian Pembayaran</span>
                    </div>
                    <i class="ti ti-credit-card fs-1 text-danger"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted"><span class="text-danger">-20%</span> vs Bulan Lalu</div>
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
                        <h3 class="fw-bold h4">Rp 34.458.000</h3>
                        <span>Total Pengeluaran</span>
                    </div>
                    <i class="ti ti-cash-banknote fs-1 text-warning"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted"><span class="text-warning">-20%</span> vs Bulan Lalu</div>
                    <a href="#" class="link-primary text-decoration-underline">Lihat</a>
                </div>
            </div>
        </div>
    </div>
</div>

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
                                <h2 class="mb-1">5.5K</h2>
                                <p class="text-success mb-2">Pembeli Baru</p>
                                <span class="badge bg-success"><i class="ti ti-arrow-up-left me-1"></i>25%</span>
                            </div>
                            <div class="col-6 text-center">
                                <h2 class="mb-1">3.5K</h2>
                                <p class="text-warning mb-2">Pembeli Kembali</p>
                                <span class="badge bg-success d-inline-flex align-items-center"><i class="ti ti-arrow-up-left me-1"></i>21%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row text-center border-top mt-4 pt-4">
                    <div class="col-4 border-end">
                        <h3 class="fw-bold mb-2">6.987</h3>
                        <small class="text-secondary">Pemasok</small>
                    </div>
                    <div class="col-4 border-end">
                        <h3 class="fw-bold mb-2">4.896</h3>
                        <small class="text-secondary">Pelanggan</small>
                    </div>
                    <div class="col-4">
                        <h3 class="fw-bold mb-2">487</h3>
                        <small class="text-secondary">Pesanan</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row g-3">
    <div class="col-lg-4">
        <div class="card h-100">
            <div class="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3">
                <h4 class="mb-0 h5">Produk Terlaris</h4>
                <button class="btn btn-sm btn-outline-secondary"><i class="ti ti-calendar"></i> Hari Ini</button>
            </div>
            <ul class="list-group list-group-flush">
                <?php
                    $topProducts = [
                        ['img' => 'product-2.png', 'name' => 'Earphone Nirkabel', 'price' => 'Rp 89.000', 'units' => '1.250', 'badge' => 'danger', 'pct' => '18%'],
                        ['img' => 'product-1.png', 'name' => 'Joystick Gaming', 'price' => 'Rp 49.000', 'units' => '5.420', 'badge' => 'primary', 'pct' => '32%'],
                        ['img' => 'product-3.png', 'name' => 'Smartwatch Pro', 'price' => 'Rp 98.000', 'units' => '862', 'badge' => 'info', 'pct' => '22%'],
                        ['img' => 'product-4.png', 'name' => 'Charger USB-C Cepat', 'price' => 'Rp 35.000', 'units' => '3.200', 'badge' => 'success', 'pct' => '28%'],
                        ['img' => 'product-5.png', 'name' => 'Speaker Bluetooth Portabel', 'price' => 'Rp 65.000', 'units' => '2.890', 'badge' => 'warning', 'pct' => '25%'],
                    ];
                ?>
                <?php $__currentLoopData = $topProducts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $p): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li class="list-group-item d-flex align-items-center gap-3">
                    <img src="<?php echo e(asset('assets/dist/assets/images/' . $p['img'])); ?>" class="rounded" width="48">
                    <div class="flex-grow-1">
                        <p class="mb-1"><?php echo e($p['name']); ?></p>
                        <div class="d-flex align-items-center gap-2 text-muted">
                            <small class="fw-semibold"><?php echo e($p['price']); ?></small>
                            <small>•</small>
                            <small><?php echo e($p['units']); ?> Unit</small>
                        </div>
                    </div>
                    <span class="badge bg-<?php echo e($p['badge']); ?>-subtle text-<?php echo e($p['badge']); ?> border border-<?php echo e($p['badge']); ?>"><?php echo e($p['pct']); ?></span>
                </li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </div>
    </div>

    <div class="col-lg-4">
        <div class="card h-100">
            <div class="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3">
                <h4 class="mb-0 h5">Stok Hampir Habis</h4>
                <a href="#" class="small text-primary text-decoration-underline">Lihat Semua</a>
            </div>
            <ul class="list-group list-group-flush">
                <?php
                    $lowStock = [
                        ['img' => 'product-8.png', 'name' => 'Headphone Nirkabel', 'id' => '#554433', 'stock' => '06'],
                        ['img' => 'product-4.png', 'name' => 'Paket Kabel USB-C', 'id' => '#887766', 'stock' => '09'],
                        ['img' => 'product-10.png', 'name' => 'Pelindung Layar HP', 'id' => '#332211', 'stock' => '03'],
                        ['img' => 'product-4.png', 'name' => 'Powerbank 20000mAh', 'id' => '#998877', 'stock' => '07'],
                        ['img' => 'product-6.png', 'name' => 'Keyboard Mekanikal RGB', 'id' => '#665544', 'stock' => '02'],
                    ];
                ?>
                <?php $__currentLoopData = $lowStock; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $p): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li class="list-group-item d-flex align-items-center gap-3">
                    <img src="<?php echo e(asset('assets/dist/assets/images/' . $p['img'])); ?>" class="rounded" width="48">
                    <div class="flex-grow-1">
                        <p class="mb-1"><?php echo e($p['name']); ?></p>
                        <small>ID: <?php echo e($p['id']); ?></small>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <span class="fw-semibold text-primary"><?php echo e($p['stock']); ?></span>
                        <small class="text-muted">Tersisa</small>
                    </div>
                </li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </div>
    </div>

    <div class="col-lg-4">
        <div class="card h-100">
            <div class="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3">
                <h4 class="mb-0 h5">Penjualan Terbaru</h4>
                <button class="btn btn-sm btn-outline-secondary"><i class="ti ti-calendar-event"></i> Mingguan</button>
            </div>
            <ul class="list-group list-group-flush">
                <?php
                    $recentSales = [
                        ['img' => 'product-7.png', 'name' => 'MacBook Pro 16"', 'cat' => 'Komputer', 'price' => 'Rp 2.499.000', 'status' => 'success', 'label' => 'Selesai'],
                        ['img' => 'product-9.png', 'name' => 'AirPods Pro Max', 'cat' => 'Audio', 'price' => 'Rp 549.000', 'status' => 'primary', 'label' => 'Diproses'],
                        ['img' => 'product-8.png', 'name' => 'iPad Air 11"', 'cat' => 'Tablet', 'price' => 'Rp 799.000', 'status' => 'success', 'label' => 'Selesai'],
                        ['img' => 'product-3.png', 'name' => 'Apple Watch Ultra', 'cat' => 'Wearable', 'price' => 'Rp 799.000', 'status' => 'warning', 'label' => 'Menunggu'],
                        ['img' => 'product-6.png', 'name' => 'Magic Keyboard', 'cat' => 'Aksesori', 'price' => 'Rp 299.000', 'status' => 'danger', 'label' => 'Dibatalkan'],
                    ];
                ?>
                <?php $__currentLoopData = $recentSales; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $s): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li class="list-group-item d-flex align-items-center gap-3">
                    <img src="<?php echo e(asset('assets/dist/assets/images/' . $s['img'])); ?>" class="rounded" width="48">
                    <div class="flex-grow-1">
                        <p class="mb-1"><?php echo e($s['name']); ?></p>
                        <div class="d-flex align-items-center gap-2 text-muted">
                            <small class="fw-semibold"><?php echo e($s['cat']); ?></small>
                            <small>•</small>
                            <small><?php echo e($s['price']); ?></small>
                        </div>
                    </div>
                    <span class="badge bg-<?php echo e($s['status']); ?>-subtle text-<?php echo e($s['status']); ?>"><?php echo e($s['label']); ?></span>
                </li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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

    <?php if(session('success')): ?>
        PNotify.success(Object.assign({}, pnotifyOptions, {
            title: 'Success!',
            text: "<?php echo e(session('success')); ?>",
            addClass: 'custom-success'
        }));
    <?php endif; ?>

    <?php if(session('error')): ?>
        PNotify.error(Object.assign({}, pnotifyOptions, {
            title: 'Error!',
            text: "<?php echo e(session('error')); ?>"
        }));
    <?php endif; ?>
});
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/dashboard/index.blade.php ENDPATH**/ ?>