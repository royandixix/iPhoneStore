<div class="row">
    <div class="col-12">

        <div class="card shadow-sm border-0">
            <div class="card-body">

                <div class="table-responsive custom-table">

                    <table class="table align-middle table-hover">

                        <thead class="table-light">
                            <tr>
                                <th style="min-width:150px;">Name</th>
                                <th style="min-width:200px;">Email</th>
                                <th style="min-width:140px;">Phone</th>
                                <th style="min-width:100px;">Role</th>
                                <th style="min-width:140px;">Joined</th>
                                <th style="min-width:120px;">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <?php $__empty_1 = true; $__currentLoopData = $customers; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $customer): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                            <tr>

                                <!-- NAME -->
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="icon-shape icon-md bg-light rounded-circle">
                                            <i class="ti ti-user"></i>
                                        </div>

                                        <span class="text-truncate d-inline-block"
                                              style="max-width:120px;">
                                            <?php echo e($customer->name); ?>

                                        </span>
                                    </div>
                                </td>

                                <!-- EMAIL -->
                                <td>
                                    <span class="text-truncate d-inline-block"
                                          style="max-width:180px;">
                                        <?php echo e($customer->email); ?>

                                    </span>
                                </td>

                                <!-- PHONE -->
                                <td><?php echo e($customer->phone ?? '-'); ?></td>

                                <!-- ROLE -->
                                <td>
                                    <span class="badge bg-info">
                                        <?php echo e($customer->role); ?>

                                    </span>
                                </td>

                                <!-- DATE -->
                                <td>
                                    <?php echo e($customer->created_at->format('d M Y')); ?>

                                </td>

                                <!-- ACTION -->
                                <td class="d-flex gap-2 flex-nowrap">

                                    <a href="<?php echo e(route('admin.customers.show', $customer->id)); ?>"
                                       class="text-primary">
                                        <i class="ti ti-eye"></i>
                                    </a>

                                    <a href="<?php echo e(route('admin.customers.edit', $customer->id)); ?>"
                                       class="text-warning">
                                        <i class="ti ti-edit"></i>
                                    </a>

                                    <button 
                                        class="border-0 bg-transparent text-danger"
                                        onclick="openDeleteModal(<?php echo e($customer->id); ?>)">
                                        <i class="ti ti-trash"></i>
                                    </button>

                                </td>

                            </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <tr>
                                <td colspan="6" class="text-center text-muted py-4">
                                    Belum ada customer
                                </td>
                            </tr>
                            <?php endif; ?>

                        </tbody>

                    </table>

                </div>

                <!-- PAGINATION -->
                <div class="mt-3">
                    <?php echo e($customers->links()); ?>

                </div>

            </div>
        </div>

    </div>
</div>

<style>
/* responsive scroll */
.custom-table {
    overflow-x: auto;
    scrollbar-width: thin;
}

/* scrollbar chrome */
.custom-table::-webkit-scrollbar {
    height: 6px;
}

.custom-table::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
}

/* prevent text break */
.table td,
.table th {
    white-space: nowrap;
    vertical-align: middle;
}

/* hover lebih halus */
.table-hover tbody tr:hover {
    background-color: rgba(0,0,0,0.02);
}
</style><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/customers/components/table.blade.php ENDPATH**/ ?>