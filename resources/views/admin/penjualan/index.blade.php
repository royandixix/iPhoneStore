@extends('admin.layouts.app')
@section('title', 'Penjualan')

@section('content')

<div>

    @include('admin.penjualan.components.header')

    @include('admin.penjualan.components.stats')

    @include('admin.penjualan.components.table')

</div>

@endsection