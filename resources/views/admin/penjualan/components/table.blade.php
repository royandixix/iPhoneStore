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
                    @forelse(\App\Models\Order::latest()->get() as $order)
                        <tr>
                            <td>{{ $loop->iteration }}</td>

                            <td>
                                {{ $order->user->name ?? '-' }}<br>
                                <small class="text-muted">{{ $order->user->email ?? '' }}</small>
                            </td>

                            <td>Rp {{ number_format($order->total, 0, ',', '.') }}</td>

                            <td>
                                <span class="badge 
                                    @if($order->status == 'pending') bg-warning
                                    @elseif($order->status == 'processing') bg-info
                                    @elseif($order->status == 'shipped') bg-primary
                                    @elseif($order->status == 'completed') bg-success
                                    @else bg-danger @endif">
                                    {{ ucfirst($order->status) }}
                                </span>
                            </td>

                            <td>{{ $order->created_at->format('d M Y') }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="text-center">Belum ada data penjualan</td>
                        </tr>
                    @endforelse
                </tbody>

            </table>

        </div>

    </div>

</div>