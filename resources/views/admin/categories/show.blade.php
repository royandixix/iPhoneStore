@extends('admin.layouts.app')

@section('title','Category Detail')

@section('content')

<div class="card border-0 shadow-sm rounded-3">
    <div class="card-body p-4">

        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h3 class="fw-bold mb-1">{{ $category->name }}</h3>
                <p class="text-muted mb-0">{{ $category->slug }}</p>
            </div>

            <a href="{{ route('admin.categories.edit',$category->id) }}"
               class="btn btn-primary">
                Edit
            </a>
        </div>

        <div class="row g-4">

            <div class="col-lg-6">
                <div class="border rounded-3 p-4 h-100">
                    <h6 class="fw-bold mb-3">Description</h6>

                    <p class="text-muted mb-0">
                        {{ $category->description ?? 'No description' }}
                    </p>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="border rounded-3 p-4 h-100">
                    <h6 class="fw-bold mb-3">Status</h6>

                    @if($category->is_active)
                        <span class="badge bg-success">Active</span>
                    @else
                        <span class="badge bg-danger">Inactive</span>
                    @endif
                </div>
            </div>

            <div class="col-lg-3">
                <div class="border rounded-3 p-4 h-100">
                    <h6 class="fw-bold mb-3">Products</h6>

                    <h3 class="fw-bold mb-0">
                        {{ $category->products->count() }}
                    </h3>
                </div>
            </div>

        </div>

    </div>
</div>

@endsection