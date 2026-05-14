@extends('admin.layouts.app')

@section('title','Create Category')

@section('content')

<div class="card border-0 shadow-sm rounded-3">
    <div class="card-body p-4">

        <div class="mb-4">
            <h4 class="fw-bold">Create Category</h4>
            <p class="text-muted mb-0">Add new category product</p>
        </div>

        <form action="{{ route('admin.categories.store') }}" method="POST">
            @csrf

            @include('admin.categories.components.form')

            <div class="mt-4">
                <button type="submit" class="btn btn-primary">
                    Save Category
                </button>

                <a href="{{ route('admin.categories.index') }}" class="btn btn-light border">
                    Cancel
                </a>
            </div>
        </form>

    </div>
</div>

@endsection