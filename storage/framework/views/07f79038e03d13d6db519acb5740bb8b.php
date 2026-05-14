<?php $__env->startSection('title', 'Edit Order'); ?>

<?php $__env->startSection('content'); ?>

    <div>

        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 class="mb-1">Edit Order #<?php echo e($order->id); ?></h2>
                <p class="text-muted mb-0">Update order status and shipping information</p>
            </div>
        </div>

        <div class="row">

            <div class="col-md-8">

                <div class="card p-4 shadow-sm border-0">

                    <form action="<?php echo e(route('admin.orders.update', $order->id)); ?>" method="POST">
                        <?php echo csrf_field(); ?>
                        <?php echo method_field('PUT'); ?>

                        <div class="mb-3">
                            <label class="form-label">Customer</label>
                            <input type="text" class="form-control" value="<?php echo e($order->user->name); ?>" disabled>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <select name="status" class="form-control" required>
                                <option value="pending" <?php echo e($order->status == 'pending' ? 'selected' : ''); ?>>Pending</option>
                                <option value="processing" <?php echo e($order->status == 'processing' ? 'selected' : ''); ?>>Processing
                                </option>
                                <option value="shipped" <?php echo e($order->status == 'shipped' ? 'selected' : ''); ?>>Shipped</option>
                                <option value="completed" <?php echo e($order->status == 'completed' ? 'selected' : ''); ?>>Completed
                                </option>
                                <option value="cancelled" <?php echo e($order->status == 'cancelled' ? 'selected' : ''); ?>>Cancelled
                                </option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Shipping Address</label>
                            <textarea name="shipping_address" class="form-control" rows="3" required><?php echo e($order->shipping_address); ?></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Total</label>
                            <input type="text" class="form-control"
                                value="Rp <?php echo e(number_format($order->total, 0, ',', '.')); ?>" disabled>
                        </div>

                        <button type="submit" class="btn btn-primary d-flex align-items-center gap-2">
                            <i class="ti ti-device-floppy"></i> Update Order
                        </button>

                    </form>

                </div>

            </div>

        </div>

    </div>

    <?php echo $__env->make('admin.components.confirm-delete', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('admin.components.alert-success', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('admin.components.alert-error', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/orders/edit.blade.php ENDPATH**/ ?>