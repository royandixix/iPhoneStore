<?php $__env->startSection('title', 'Detail Order'); ?>

<?php $__env->startSection('content'); ?>

    <div class="container-fluid">

        <h2>Detail Order #<?php echo e($order->id); ?></h2>

        <p><strong>Customer:</strong> <?php echo e($order->user->name); ?></p>
        <p><strong>Status:</strong> <?php echo e($order->status); ?></p>
        <p><strong>Alamat:</strong> <?php echo e($order->shipping_address); ?></p>

        <hr>

        <h5>Produk:</h5>

        <table class="table">
            <thead>
                <tr>
                    <th>Produk</th>
                    <th>Harga</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $order->orderItems; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td><?php echo e($item->product->name); ?></td>
                        <td>Rp <?php echo e(number_format($item->price, 0, ',', '.')); ?></td>
                        <td><?php echo e($item->quantity); ?></td>
                        <td>
                            Rp <?php echo e(number_format($item->price * $item->quantity, 0, ',', '.')); ?>

                        </td>
                    </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>

        <h4>Total: Rp <?php echo e(number_format($order->total, 0, ',', '.')); ?></h4>

    </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/orders/show.blade.php ENDPATH**/ ?>