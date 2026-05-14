<?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
<div class="modal fade" id="orderModal<?php echo e($order->id); ?>" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Detail Order No <?php echo e($loop->iteration); ?></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">

                <p><strong>Customer:</strong> <?php echo e($order->user->name ?? '-'); ?></p>
                <p><strong>Email:</strong> <?php echo e($order->user->email ?? '-'); ?></p>
                <p><strong>Status:</strong> <?php echo e($order->status); ?></p>
                <p><strong>Alamat:</strong> <?php echo e($order->shipping_address); ?></p>

                <hr>

                <h6>Produk:</h6>

                <table class="table table-sm">
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
                                <td><?php echo e($item->product->name ?? '-'); ?></td>
                                <td>Rp <?php echo e(number_format($item->price, 0, ',', '.')); ?></td>
                                <td><?php echo e($item->quantity); ?></td>
                                <td>
                                    Rp <?php echo e(number_format($item->price * $item->quantity, 0, ',', '.')); ?>

                                </td>
                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </tbody>
                </table>

                <h5>Total: Rp <?php echo e(number_format($order->total, 0, ',', '.')); ?></h5>

            </div>

        </div>
    </div>
</div>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/orders/components/modal.blade.php ENDPATH**/ ?>