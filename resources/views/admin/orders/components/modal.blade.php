@foreach($orders as $order)
<div class="modal fade" id="orderModal{{ $order->id }}" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Detail Order No {{ $loop->iteration }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">

                <p><strong>Customer:</strong> {{ $order->user->name ?? '-' }}</p>
                <p><strong>Email:</strong> {{ $order->user->email ?? '-' }}</p>
                <p><strong>Status:</strong> {{ $order->status }}</p>
                <p><strong>Alamat:</strong> {{ $order->shipping_address }}</p>

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
                        @foreach ($order->orderItems as $item)
                            <tr>
                                <td>{{ $item->product->name ?? '-' }}</td>
                                <td>Rp {{ number_format($item->price, 0, ',', '.') }}</td>
                                <td>{{ $item->quantity }}</td>
                                <td>
                                    Rp {{ number_format($item->price * $item->quantity, 0, ',', '.') }}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

                <h5>Total: Rp {{ number_format($order->total, 0, ',', '.') }}</h5>

            </div>

        </div>
    </div>
</div>
@endforeach