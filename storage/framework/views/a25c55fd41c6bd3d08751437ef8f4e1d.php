<div class="card shadow-sm border-0">

    <div class="card-body">

        <h5 class="mb-3">Riwayat Penjualan</h5>

        <div class="table-responsive">

            <table class="table align-middle">

                <thead class="table-light">
                    <tr>
                        <th>No</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <?php $__empty_1 = true; $__currentLoopData = \App\Models\Order::latest()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
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
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="5" class="text-center">Belum ada data penjualan</td>
                        </tr>
                    <?php endif; ?>
                </tbody>

            </table>

        </div>

    </div>

</div><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/penjualan/components/table.blade.php ENDPATH**/ ?>