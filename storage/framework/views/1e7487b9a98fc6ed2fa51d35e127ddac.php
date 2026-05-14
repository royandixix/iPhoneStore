<?php $__env->startSection('title', 'Accessories'); ?>

<?php $__env->startSection('content'); ?>
<div class="container-fluid">

    <div class="row mb-4">
        <div class="col-12 d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div>
                <h1 class="fs-3 mb-1">Halaman Accessories</h1>
                <p class="mb-0">Kelola inventaris accessories Anda dengan mudah</p>
            </div>
            <div>
                <a href="<?php echo e(route('admin.products.accessories.create')); ?>" class="btn btn-primary">
                    Tambah Produk
                </a>
            </div>
        </div>
    </div>

    <div class="row mb-4">
        <div class="col-12">
            <?php echo $__env->make('admin.components.product-stats', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
        </div>
    </div>

    <div class="row mb-3">
        <div class="col-12 d-flex flex-wrap gap-3 justify-content-between align-items-center">

            <?php echo $__env->make('admin.components.search', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

            <div class="d-flex gap-2 flex-wrap">
                <a href="#" class="btn btn-soft-primary d-flex align-items-center gap-1">
                    <i class="ti ti-filter fs-4"></i> Filter
                </a>

                <a href="<?php echo e(route('admin.laporan.produk.review')); ?>"
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
                        <?php $__empty_1 = true; $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                            <tr class="align-middle">

                                <td>
                                    <img src="<?php echo e($product->image ? asset('storage/' . $product->image) : asset('assets/dist/assets/images/product-1.png')); ?>"
                                        class="avatar avatar-md rounded"
                                        style="width:40px;height:40px;object-fit:cover;">
                                </td>

                                <td>
                                    <a href="#" data-bs-toggle="modal"
                                        data-bs-target="#productModal<?php echo e($product->id); ?>">
                                        <?php echo e($product->name); ?>

                                    </a>
                                </td>

                                <td><?php echo e($product->category ?? '-'); ?></td>
                                <td><?php echo e($product->label ?? '-'); ?></td>

                                <td>
                                    Rp <?php echo e(number_format($product->price ?? 0, 0, ',', '.')); ?>

                                </td>

                                <td><?php echo e($product->stock); ?></td>

                                <td class="d-flex align-items-center gap-2">

                                    <a href="<?php echo e(route('admin.products.accessories.edit', $product->id)); ?>">
                                        <i class="ti ti-edit"></i>
                                    </a>

                                    <form action="<?php echo e(route('admin.products.accessories.destroy', $product->id)); ?>"
                                        method="POST"
                                        onsubmit="return confirm('Yakin hapus produk ini?')">

                                        <?php echo csrf_field(); ?>
                                        <?php echo method_field('DELETE'); ?>

                                        <button type="submit"
                                            class="border-0 bg-transparent p-0 link-danger">
                                            <i class="ti ti-trash"></i>
                                        </button>
                                    </form>

                                </td>

                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <tr>
                                <td colspan="7" class="text-center py-4 text-muted">
                                    Belum ada produk
                                </td>
                            </tr>
                        <?php endif; ?>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colspan="7">
                                    <div class="d-flex justify-content-end p-2">
                                        <?php echo e($products->links()); ?>

                                    </div>
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>

            <?php echo $__env->make('admin.components.confirm-delete', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
            <?php echo $__env->make('admin.components.alert-success', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
            <?php echo $__env->make('admin.components.alert-error', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

        </div>
    </div>

</div>


<?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
<div class="modal fade" id="productModal<?php echo e($product->id); ?>" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title"><?php echo e($product->name); ?></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <div class="row">

                    <div class="col-md-5 mb-3 mb-md-0">
                        <img src="<?php echo e($product->image ? asset('storage/' . $product->image) : asset('assets/dist/assets/images/product-1.png')); ?>"
                            class="img-fluid rounded">
                    </div>

                    <div class="col-md-7">
                        <p><strong>Category:</strong> <?php echo e($product->category ?? '-'); ?></p>
                        <p><strong>Label:</strong> <?php echo e($product->label ?? '-'); ?></p>
                        <p><strong>Price:</strong> Rp <?php echo e(number_format($product->price ?? 0, 0, ',', '.')); ?></p>
                        <p><strong>Stock:</strong> <?php echo e($product->stock); ?></p>
                        <hr>
                        <p><?php echo e($product->description ?? '-'); ?></p>
                    </div>

                </div>
            </div>

            <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</div>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/products/accessories/index.blade.php ENDPATH**/ ?>