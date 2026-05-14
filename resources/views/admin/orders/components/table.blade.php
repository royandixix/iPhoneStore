<div class="card">
    <div class="card-body p-4">

        <h5 class="mb-3">Order List</h5>

        <div class="table-responsive">
            <table class="table align-middle">

                <thead class="table-light">
                    <tr>
                        <th>No</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th class="text-end">Action</th>
                    </tr>
                </thead>

                <tbody>
                    @forelse($orders as $order)
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

                            <td class="text-end">

                                <button type="button"
                                    class="btn btn-sm btn-light"
                                    data-bs-toggle="modal"
                                    data-bs-target="#orderModal{{ $order->id }}">
                                    <i class="ti ti-eye"></i>
                                </button>

                                <a href="{{ route('admin.orders.edit', $order->id) }}" class="btn btn-sm btn-warning">
                                    <i class="ti ti-edit"></i>
                                </a>

                                <form action="{{ route('admin.orders.destroy', $order->id) }}"
                                    method="POST"
                                    class="d-inline">

                                    @csrf
                                    @method('DELETE')

                                    <button type="button"
                                        class="btn btn-sm btn-danger btn-delete">
                                        <i class="ti ti-trash"></i>
                                    </button>

                                </form>

                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="text-center">No orders found</td>
                        </tr>
                    @endforelse
                </tbody>

            </table>
        </div>

    </div>
</div>

@include('admin.components.confirm-delete')
@include('admin.components.alert-success')
@include('admin.components.alert-error')
@include('admin.orders.components.modal')