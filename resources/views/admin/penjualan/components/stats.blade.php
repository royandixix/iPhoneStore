<div class="row g-3 mb-3">

    <div class="col-lg-4 col-12">
        <div class="card">
            <div class="card-body p-4">

                <div class="d-flex justify-content-between border-bottom pb-4 mb-3">
                    <div>
                        <h3 class="fw-bold h4">
                            Rp {{ number_format(\App\Models\Order::sum('total'), 0, ',', '.') }}
                        </h3>
                        <span>Total Penjualan</span>
                    </div>
                    <div>
                        <i class="ti ti-layers-subtract fs-1 text-primary"></i>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted">
                        <span class="text-success">+100%</span> All Time
                    </div>
                    <div>
                        <a href="#" class="link-primary text-decoration-underline">View</a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="col-lg-4 col-12">
        <div class="card">
            <div class="card-body p-4">

                <div class="d-flex justify-content-between border-bottom pb-4 mb-3">
                    <div>
                        <h3 class="fw-bold h4">
                            {{ \App\Models\Order::count() }}
                        </h3>
                        <span>Total Order</span>
                    </div>
                    <div>
                        <i class="ti ti-shopping-cart fs-1 text-danger"></i>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted">
                        <span class="text-danger">All</span> Orders
                    </div>
                    <div>
                        <a href="#" class="link-primary text-decoration-underline">View</a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="col-lg-4 col-12">
        <div class="card">
            <div class="card-body p-4">

                <div class="d-flex justify-content-between border-bottom pb-4 mb-3">
                    <div>
                        <h3 class="fw-bold h4">
                            {{ \App\Models\Order::where('status','completed')->count() }}
                        </h3>
                        <span>Completed Orders</span>
                    </div>
                    <div>
                        <i class="ti ti-check fs-1 text-success"></i>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-center small">
                    <div class="text-muted">
                        <span class="text-success">Finished</span> Orders
                    </div>
                    <div>
                        <a href="#" class="link-primary text-decoration-underline">View</a>
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>