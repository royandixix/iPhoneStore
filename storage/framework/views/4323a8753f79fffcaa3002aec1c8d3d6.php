<?php $__env->startSection('title','Create Category'); ?>

<?php $__env->startSection('content'); ?>

<div class="card border-0 shadow-sm rounded-3">
    <div class="card-body p-4">

        <div class="mb-4">
            <h4 class="fw-bold">Create Category</h4>
            <p class="text-muted mb-0">Add new category product</p>
        </div>

        <form action="<?php echo e(route('admin.categories.store')); ?>" method="POST">
            <?php echo csrf_field(); ?>

            <?php echo $__env->make('admin.categories.components.form', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

            <div class="mt-4">
                <button type="submit" class="btn btn-primary">
                    Save Category
                </button>

                <a href="<?php echo e(route('admin.categories.index')); ?>" class="btn btn-light border">
                    Cancel
                </a>
            </div>
        </form>

    </div>
</div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/categories/create.blade.php ENDPATH**/ ?>