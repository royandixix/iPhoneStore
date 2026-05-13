@extends('admin.layouts.app')
@section('title', 'Customers')

@section('content')
<div class="container-fluid">

    <!-- HEADER -->
    <div class="row mb-4">
        <div class="col-12">
            <h1 class="fs-3 mb-1">Customers</h1>
            <p class="mb-0">Kelola data pelanggan yang terdaftar</p>
        </div>
    </div>

    <!-- STATS -->
    @include('admin.customers.components.stats', ['customers' => $customers])

    <!-- TABLE -->
    @include('admin.customers.components.table', ['customers' => $customers])

    <!-- MODAL DELETE -->
    @include('admin.customers.components.modal-delete')

</div>
@endsection