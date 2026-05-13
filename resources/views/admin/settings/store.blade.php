@extends('admin.layouts.app')
@section('title', 'Store Settings')

@section('content')

<div class="container-fluid">

    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h2 class="mb-1">Store Settings</h2>
            <p class="text-muted mb-0">
                Configure your store information including name, contact details,
                address, and branding to ensure your iPhone store appears professional and trustworthy.
            </p>
        </div>
    </div>

    <div class="row">

        <div class="col-md-3">
            @include('admin.settings.components.sidebar')
        </div>

        <div class="col-md-9">

            <div class="card p-4 shadow-sm border-0">

                <h5 class="mb-4 d-flex align-items-center">
                    <i class="ti ti-building me-2"></i> Store Information
                </h5>

                <form action="{{ route('admin.settings.store.update') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Store Name</label>
                            <input type="text" name="store_name" class="form-control"
                                   value="{{ old('store_name') }}" placeholder="iPhone Store">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" name="phone" class="form-control"
                                   value="{{ old('phone') }}" placeholder="+62 812 xxxx">
                        </div>

                        <div class="col-md-12 mb-3">
                            <label class="form-label">Address</label>
                            <textarea name="address" class="form-control" rows="3">{{ old('address') }}</textarea>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control"
                                   value="{{ old('email') }}" placeholder="store@email.com">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Store Logo</label>
                            <input type="file" name="logo" class="form-control">
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary d-flex align-items-center gap-2">
                        <i class="ti ti-device-floppy"></i> Save Store Settings
                    </button>

                </form>

            </div>

        </div>

    </div>

</div>

@include('admin.components.alert-success')
@include('admin.components.alert-error')

@endsection