<div class="row">
  <div class="col-12">
    <div class="card">
      <div class="card-body p-4">

        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="mb-0 fs-5">Top Products</h2>
        </div>

        <div class="list-group list-group-flush">

          @foreach($topProducts as $product)
          <div class="list-group-item p-3 d-flex align-items-center">

            <div class="me-3">
              <img src="{{ asset('storage/'.$product->image) }}"
                   class="rounded"
                   style="width:48px;height:48px;object-fit:cover;">
            </div>

            <div class="flex-grow-1">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="mb-0">{{ $product->name }}</h6>
                  <small class="text-secondary">
                    {{ $product->sold }} units sold
                  </small>
                </div>
                <div class="text-end">
                  <strong>
                    Rp {{ number_format($product->price * $product->sold,0,',','.') }}
                  </strong>
                </div>
              </div>
            </div>

          </div>
          @endforeach

        </div>

      </div>
    </div>
  </div>
</div>