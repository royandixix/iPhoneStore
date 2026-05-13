<?php $__env->startSection('title', 'Customer Detail'); ?>

<?php $__env->startSection('content'); ?>
<div class="container-fluid">

    <!-- HEADER -->
    <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
            <div>
                <h1 class="fs-3 mb-1">Customer Detail</h1>
                <p class="mb-0">Informasi lengkap pelanggan</p>
            </div>

            <a href="<?php echo e(route('admin.customers.index')); ?>" class="btn btn-primary">
                Kembali
            </a>
        </div>
    </div>

    <div class="row mb-4">

        <!-- PROFILE -->
        <div class="col-lg-4">
            <div class="card p-4 text-center">

                <img src="<?php echo e($customer->photo 
                    ? asset('storage/' . $customer->photo) 
                    : asset('assets/dist/assets/images/avatar.png')); ?>"
                    class="rounded-circle mb-3"
                    width="90"
                    height="90"
                    style="object-fit:cover;">

                <h4 class="mb-1"><?php echo e($customer->name); ?></h4>
                <p class="text-muted mb-2"><?php echo e($customer->email); ?></p>

                <span class="badge bg-info mb-3">
                    <?php echo e($customer->role); ?>

                </span>

                <hr>

                <p class="mb-1">
                    <strong>Phone:</strong> <?php echo e($customer->phone ?? '-'); ?>

                </p>

                <p class="mb-0">
                    <strong>Address:</strong> <?php echo e($customer->address ?? '-'); ?>

                </p>

            </div>
        </div>

        <!-- STATS -->
        <div class="col-lg-8">

            <div class="row g-3">

                <div class="col-md-4">
                    <div class="card p-4 bg-primary bg-opacity-10">
                        <h6>Total Orders</h6>
                        <h3><?php echo e($customer->orders->count()); ?></h3>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-4 bg-success bg-opacity-10">
                        <h6>Total Spent</h6>
                        <h3>
                            Rp <?php echo e(number_format($customer->orders->sum('total'), 0, ',', '.')); ?>

                        </h3>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-4 bg-warning bg-opacity-10">
                        <h6>Member Since</h6>
                        <h3><?php echo e($customer->created_at->format('M Y')); ?></h3>
                    </div>
                </div>

            </div>

            <!-- ORDERS -->
            <div class="card mt-4">
                <div class="card-header">
                    <h5 class="mb-0">Recent Orders</h5>
                </div>

                <div class="table-responsive">
                    <table class="table mb-0 align-middle">

                        <thead class="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>

                        <?php $__empty_1 = true; $__currentLoopData = $customer->orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                            <tr>
                                <td>#<?php echo e($order->id); ?></td>

                                <td>
                                    Rp <?php echo e(number_format($order->total, 0, ',', '.')); ?>

                                </td>

                                <td>
                                    <span class="badge 
                                        <?php if($order->status == 'pending'): ?> bg-warning
                                        <?php elseif($order->status == 'completed'): ?> bg-success
                                        <?php elseif($order->status == 'cancelled'): ?> bg-danger
                                        <?php else: ?> bg-info
                                        <?php endif; ?>">
                                        <?php echo e($order->status); ?>

                                    </span>
                                </td>

                                <td>
                                    <?php echo e($order->created_at->format('d M Y')); ?>

                                </td>
                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <tr>
                                <td colspan="4" class="text-center text-muted py-3">
                                    Belum ada order
                                </td>
                            </tr>
                        <?php endif; ?>

                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    </div>

</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/customers/show.blade.php ENDPATH**/ ?>