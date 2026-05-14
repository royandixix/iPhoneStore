@extends('admin.layouts.app')
@section('title', 'Edit Order')

@section('content')

<div>

    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h2 class="mb-1">Edit Order #{{ $order->id }}</h2>
            <p class="text-muted mb-0">Update order status and shipping information</p>
        </div>
    </div>

    <div class="row">

        <div class="col-md-8">

            <div class="card p-4 shadow-sm border-0">

                <form action="{{ route('admin.orders.update', $order->id) }}" method="POST">
                    @csrf
                    @method('PUT')

                    <div class="mb-3">
                        <label class="form-label">Customer</label>
                        <input type="text" class="form-control" value="{{ $order->user->name }}" disabled>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Status</label>
                        <select name="status" class="form-control" required>
                            <option value="pending" {{ $order->status == 'pending' ? 'selected' : '' }}>Pending</option>
                            <option value="processing" {{ $order->status == 'processing' ? 'selected' : '' }}>Processing</option>
                            <option value="shipped" {{ $order->status == 'shipped' ? 'selected' : '' }}>Shipped</option>
                            <option value="completed" {{ $order->status == 'completed' ? 'selected' : '' }}>Completed</option>
                            <option value="cancelled" {{ $order->status == 'cancelled' ? 'selected' : '' }}>Cancelled</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Shipping Address</label>
                        <textarea name="shipping_address" class="form-control" rows="3" required>{{ $order->shipping_address }}</textarea>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Total</label>
                        <input type="text" class="form-control"
                            value="Rp {{ number_format($order->total, 0, ',', '.') }}" disabled>
                    </div>

                    <button type="submit" class="btn btn-primary d-flex align-items-center gap-2">
                        <i class="ti ti-device-floppy"></i> Update Order
                    </button>

                </form>

            </div>

        </div>

    </div>

</div>

@include('admin.components.confirm-delete')
@include('admin.components.alert-success')
@include('admin.components.alert-error')

@endsection