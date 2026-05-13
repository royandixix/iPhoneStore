@extends('admin.layouts.app')
@section('title', 'Customer Detail')

@section('content')
<div class="container-fluid">

    <!-- HEADER -->
    <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
            <div>
                <h1 class="fs-3 mb-1">Customer Detail</h1>
                <p class="mb-0">Informasi lengkap pelanggan</p>
            </div>

            <a href="{{ route('admin.customers.index') }}" class="btn btn-primary">
                Kembali
            </a>
        </div>
    </div>

    <div class="row mb-4">

        <!-- PROFILE -->
        <div class="col-lg-4">
            <div class="card p-4 text-center">

                <img src="{{ $customer->photo 
                    ? asset('storage/' . $customer->photo) 
                    : asset('assets/dist/assets/images/avatar.png') }}"
                    class="rounded-circle mb-3"
                    width="90"
                    height="90"
                    style="object-fit:cover;">

                <h4 class="mb-1">{{ $customer->name }}</h4>
                <p class="text-muted mb-2">{{ $customer->email }}</p>

                <span class="badge bg-info mb-3">
                    {{ $customer->role }}
                </span>

                <hr>

                <p class="mb-1">
                    <strong>Phone:</strong> {{ $customer->phone ?? '-' }}
                </p>

                <p class="mb-0">
                    <strong>Address:</strong> {{ $customer->address ?? '-' }}
                </p>

            </div>
        </div>

        <!-- STATS -->
        <div class="col-lg-8">

            <div class="row g-3">

                <div class="col-md-4">
                    <div class="card p-4 bg-primary bg-opacity-10">
                        <h6>Total Orders</h6>
                        <h3>{{ $customer->orders->count() }}</h3>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-4 bg-success bg-opacity-10">
                        <h6>Total Spent</h6>
                        <h3>
                            Rp {{ number_format($customer->orders->sum('total'), 0, ',', '.') }}
                        </h3>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-4 bg-warning bg-opacity-10">
                        <h6>Member Since</h6>
                        <h3>{{ $customer->created_at->format('M Y') }}</h3>
                    </div>
                </div>

            </div>

            <!-- ORDERS -->
            <div class="card mt-4">
                <div class="card-header">
                    <h5 class="mb-0">Recent Orders</h5>
                </div>

                <div class="table-responsive">
                    <table class="table mb-0 align-middle">

                        <thead class="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>

                        @forelse ($customer->orders as $order)
                            <tr>
                                <td>#{{ $order->id }}</td>

                                <td>
                                    Rp {{ number_format($order->total, 0, ',', '.') }}
                                </td>

                                <td>
                                    <span class="badge 
                                        @if($order->status == 'pending') bg-warning
                                        @elseif($order->status == 'completed') bg-success
                                        @elseif($order->status == 'cancelled') bg-danger
                                        @else bg-info
                                        @endif">
                                        {{ $order->status }}
                                    </span>
                                </td>

                                <td>
                                    {{ $order->created_at->format('d M Y') }}
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="text-center text-muted py-3">
                                    Belum ada order
                                </td>
                            </tr>
                        @endforelse

                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    </div>

</div>
@endsection