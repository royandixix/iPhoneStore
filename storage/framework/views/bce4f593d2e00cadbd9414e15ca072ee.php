<div class="card">
    <div class="card-body p-4">

        <h5 class="mb-3">Order List</h5>

        <div class="table-responsive">
            <table class="table align-middle">

                <thead class="table-light">
                    <tr>
                        <th>No</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th class="text-end">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <?php $__empty_1 = true; $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td><?php echo e($loop->iteration); ?></td>

                            <td>
                                <?php echo e($order->user->name ?? '-'); ?><br>
                                <small class="text-muted"><?php echo e($order->user->email ?? ''); ?></small>
                            </td>

                            <td>Rp <?php echo e(number_format($order->total, 0, ',', '.')); ?></td>

                            <td>
                                <span class="badge 
                                    <?php if($order->status == 'pending'): ?> bg-warning
                                    <?php elseif($order->status == 'processing'): ?> bg-info
                                    <?php elseif($order->status == 'shipped'): ?> bg-primary
                                    <?php elseif($order->status == 'completed'): ?> bg-success
                                    <?php else: ?> bg-danger <?php endif; ?>">
                                    <?php echo e(ucfirst($order->status)); ?>

                                </span>
                            </td>

                            <td><?php echo e($order->created_at->format('d M Y')); ?></td>

                            <td class="text-end">

                                <button type="button"
                                    class="btn btn-sm btn-light"
                                    data-bs-toggle="modal"
                                    data-bs-target="#orderModal<?php echo e($order->id); ?>">
                                    <i class="ti ti-eye"></i>
                                </button>

                                <a href="<?php echo e(route('admin.orders.edit', $order->id)); ?>" class="btn btn-sm btn-warning">
                                    <i class="ti ti-edit"></i>
                                </a>

                                <form action="<?php echo e(route('admin.orders.destroy', $order->id)); ?>"
                                    method="POST"
                                    class="d-inline">

                                    <?php echo csrf_field(); ?>
                                    <?php echo method_field('DELETE'); ?>

                                    <button type="button"
                                        class="btn btn-sm btn-danger btn-delete">
                                        <i class="ti ti-trash"></i>
                                    </button>

                                </form>

                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="6" class="text-center">No orders found</td>
                        </tr>
                    <?php endif; ?>
                </tbody>

            </table>
        </div>

    </div>
</div>

<?php echo $__env->make('admin.components.confirm-delete', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php echo $__env->make('admin.components.alert-success', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php echo $__env->make('admin.components.alert-error', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php echo $__env->make('admin.orders.components.modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/orders/components/table.blade.php ENDPATH**/ ?>