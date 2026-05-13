<?php $__env->startSection('title', 'Review Laporan Produk'); ?>

<?php $__env->startSection('content'); ?>
<div class="container-fluid">

    <div class="row mb-3">
        <div class="col-12 d-flex flex-wrap justify-content-between align-items-center gap-2">
            <div>
                <h1 class="fs-3 mb-1">Review Laporan Produk</h1>
                <p class="text-muted mb-0">Menampilkan data lengkap produk sebelum dicetak ke PDF</p>
            </div>
            <a href="<?php echo e(route('admin.laporan.produk.pdf')); ?>"
               class="btn btn-danger d-flex align-items-center gap-2 px-3 py-2 shadow-sm">
                <i class="ti ti-file-type-pdf fs-5"></i>
                <span>PDF</span>
            </a>
        </div>
    </div>

    <div class="row mb-3">
        <div class="col-12">
            <div class="d-flex align-items-start gap-3 p-3 rounded-3" style="background:#fff3cd;">
                <div>
                    <i class="ti ti-alert-triangle fs-3 text-warning"></i>
                </div>
                <div>
                    <div class="fw-semibold mb-1">Perhatian Sebelum Cetak</div>
                    <div class="text-muted small">
                        Data yang ditampilkan merupakan seluruh produk yang tersimpan dalam sistem.
                        Pastikan informasi seperti nama, harga, dan stok sudah sesuai sebelum melakukan proses cetak laporan PDF.
                        Kesalahan data akan mempengaruhi hasil laporan yang dihasilkan.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Label</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>

                        
                    </thead>
                    <tbody>
                        <?php $__empty_1 = true; $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td>
                                <img src="<?php echo e($product->image ? asset('storage/' . $product->image) : asset('assets/dist/assets/images/product-1.png')); ?>"
                                     style="width:50px;height:50px;object-fit:cover;">
                            </td>
                            <td><?php echo e($product->name); ?></td>
                            <td><?php echo e($product->category ?? '-'); ?></td>
                            <td><?php echo e($product->label ?? '-'); ?></td>
                            <td>Rp <?php echo e(number_format($product->price,0,',','.')); ?></td>
                            <td><?php echo e($product->stock); ?></td>
                        </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="6" class="text-center">Belum ada produk</td>
                        </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/laporan/produk-review.blade.php ENDPATH**/ ?>