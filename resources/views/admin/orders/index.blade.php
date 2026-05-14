@extends('admin.layouts.app')
@section('title','Orders')

@section('content')

<div class="container-fluid">
    @include('admin.orders.components.header')
    @include('admin.orders.components.stats')
    @include('admin.orders.components.chart')
    @include('admin.orders.components.table')
    {{-- @include('admin.orders.components.top-products') --}}
    @include('admin.orders.components.modal')

</div>

@endsection