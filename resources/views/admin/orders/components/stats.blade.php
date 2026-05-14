<div class="row g-3 mb-3">

  <div class="col-12 col-sm-6 col-md-3">
    <div class="card h-100">
      <div class="card-body p-4">
        <h6 class="mb-4">Total Revenue</h6>
        <h3 class="mb-1 fw-bold">
          Rp {{ number_format($orders->sum('total'),0,',','.') }}
        </h3>
        <p class="mb-0 text-success small">
          <i class="ti ti-arrow-up"></i> All time revenue
        </p>
      </div>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-3">
    <div class="card h-100">
      <div class="card-body p-4">
        <h6 class="mb-4">Orders</h6>
        <h3 class="mb-1 fw-bold">{{ $orders->count() }}</h3>
        <p class="mb-0 text-success small">
          <i class="ti ti-arrow-up"></i> Total orders
        </p>
      </div>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-3">
    <div class="card h-100">
      <div class="card-body p-4">
        <h6 class="mb-4">Pending</h6>
        <h3 class="mb-1 fw-bold">{{ $orders->where('status','pending')->count() }}</h3>
        <p class="mb-0 text-danger small">
          <i class="ti ti-arrow-down"></i> Need processing
        </p>
      </div>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-3">
    <div class="card h-100">
      <div class="card-body p-4">
        <h6 class="mb-4">Completed</h6>
        <h3 class="mb-1 fw-bold">{{ $orders->where('status','completed')->count() }}</h3>
        <p class="mb-0 text-success small">
          <i class="ti ti-check"></i> Finished orders
        </p>
      </div>
    </div>
  </div>

</div>