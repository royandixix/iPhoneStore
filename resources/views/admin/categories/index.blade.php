@extends('admin.layouts.app')
@section('title','Categories')
@section('content')

@include('admin.categories.components.header')
@include('admin.categories.components.stats')
@include('admin.categories.components.table')
@include('admin.categories.components.modal')


@endsection