<?php $__env->startSection('title', 'Customers'); ?>

<?php $__env->startSection('content'); ?>
<div class="container-fluid">

    <!-- HEADER -->
    <div class="row mb-4">
        <div class="col-12">
            <h1 class="fs-3 mb-1">Customers</h1>
            <p class="mb-0">Kelola data pelanggan yang terdaftar</p>
        </div>
    </div>

    <!-- STATS -->
    <?php echo $__env->make('admin.customers.components.stats', ['customers' => $customers], array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

    <!-- TABLE -->
    <?php echo $__env->make('admin.customers.components.table', ['customers' => $customers], array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

    <!-- MODAL DELETE -->
    <?php echo $__env->make('admin.customers.components.modal-delete', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/customers/index.blade.php ENDPATH**/ ?>