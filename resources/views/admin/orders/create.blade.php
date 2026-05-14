@extends('admin.layouts.app')
@section('title', 'Create Order')

@section('content')

    <div class="container-fluid">

        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 class="mb-1">Create Order</h2>
                <p class="text-muted mb-0">Create a new order manually</p>
            </div>
        </div>

        <div class="row justify-content-center">

            <div class="col-md-8">

                <div class="card p-4 shadow-sm border-0">

                    <form action="{{ route('admin.orders.store') }}" method="POST">
                        @csrf

                        <div class="mb-3">
                            <label class="form-label">Customer</label>
                            <select name="user_id" class="form-control" required>
                                @foreach ($users as $user)
                                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <select name="status" class="form-control">
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Shipping Address</label>
                            <textarea name="shipping_address" class="form-control" required></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Total</label>
                            <input type="number" name="total" class="form-control" required>
                        </div>

                        <button type="submit" class="btn btn-primary d-flex align-items-center gap-2">
                            <i class="ti ti-plus"></i> Create Order
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
