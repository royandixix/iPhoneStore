<div class="row g-3 mb-4">

    <div class="col-lg-4 col-12">
        <div class="card p-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-2">
            <div class="d-flex gap-3">
                <div class="icon-shape icon-md bg-primary text-white rounded-2">
                    <i class="ti ti-users fs-4"></i>
                </div>
                <div>
                    <h2 class="fs-6 mb-2">Total Customers</h2>
                    <h3 class="fw-bold mb-0"><?php echo e($customers->total()); ?></h3>
                    <p class="text-primary mb-0 small">All registered users</p>
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-4 col-12">
        <div class="card p-4 bg-success bg-opacity-10 border border-success border-opacity-25 rounded-2">
            <div class="d-flex gap-3">
                <div class="icon-shape icon-md bg-success text-white rounded-2">
                    <i class="ti ti-user-check fs-4"></i>
                </div>
                <div>
                    <h2 class="fs-6 mb-2">Active Customers</h2>
                    <h3 class="fw-bold mb-0">-</h3>
                    <p class="text-success mb-0 small">UI only</p>
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-4 col-12">
        <div class="card p-4 bg-warning bg-opacity-10 border border-warning border-opacity-25 rounded-2">
            <div class="d-flex gap-3">
                <div class="icon-shape icon-md bg-warning text-white rounded-2">
                    <i class="ti ti-shopping-cart fs-4"></i>
                </div>
                <div>
                    <h2 class="fs-6 mb-2">Total Orders</h2>
                    <h3 class="fw-bold mb-0">-</h3>
                    <p class="text-warning mb-0 small">UI only</p>
                </div>
            </div>
        </div>
    </div>

</div><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/customers/components/stats.blade.php ENDPATH**/ ?>