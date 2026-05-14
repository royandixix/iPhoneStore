<div class="row g-3 mb-4">

    <div class="col-lg-3 col-md-6 col-12">

        <div class="card p-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-3 shadow-sm">

            <div class="d-flex gap-3 align-items-center">

                <div class="icon-shape icon-md bg-primary text-white rounded-3">
                    <i class="ti ti-category fs-4"></i>
                </div>

                <div>
                    <h6 class="text-muted mb-1">Total Categories</h6>

                    <h3 class="fw-bold mb-0">
                        <?php echo e($categories->count()); ?>

                    </h3>
                </div>

            </div>

        </div>

    </div>

    <div class="col-lg-3 col-md-6 col-12">

        <div class="card p-4 bg-success bg-opacity-10 border border-success border-opacity-25 rounded-3 shadow-sm">

            <div class="d-flex gap-3 align-items-center">

                <div class="icon-shape icon-md bg-success text-white rounded-3">
                    <i class="ti ti-check fs-4"></i>
                </div>

                <div>
                    <h6 class="text-muted mb-1">Active Categories</h6>

                    <h3 class="fw-bold mb-0">
                        <?php echo e($categories->where('is_active',true)->count()); ?>

                    </h3>
                </div>

            </div>

        </div>

    </div>

    <div class="col-lg-3 col-md-6 col-12">

        <div class="card p-4 bg-warning bg-opacity-10 border border-warning border-opacity-25 rounded-3 shadow-sm">

            <div class="d-flex gap-3 align-items-center">

                <div class="icon-shape icon-md bg-warning text-white rounded-3">
                    <i class="ti ti-package fs-4"></i>
                </div>

                <div>
                    <h6 class="text-muted mb-1">Total Products</h6>

                    <h3 class="fw-bold mb-0">
                        <?php echo e($categories->sum('products_count')); ?>

                    </h3>
                </div>

            </div>

        </div>

    </div>

    <div class="col-lg-3 col-md-6 col-12">

        <div class="card p-4 bg-info bg-opacity-10 border border-info border-opacity-25 rounded-3 shadow-sm">

            <div class="d-flex gap-3 align-items-center">

                <div class="icon-shape icon-md bg-info text-white rounded-3">
                    <i class="ti ti-chart-bar fs-4"></i>
                </div>

                <div>
                    <h6 class="text-muted mb-1">Best Category</h6>

                    <h5 class="fw-bold mb-0">
                        <?php echo e($categories->sortByDesc('products_count')->first()->name ?? '-'); ?>

                    </h5>
                </div>

            </div>

        </div>

    </div>

</div><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/categories/components/stats.blade.php ENDPATH**/ ?>