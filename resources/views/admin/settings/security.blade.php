@extends('admin.layouts.app')
@section('title', 'Security Settings')

@section('content')

<div class="container-fluid">

    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h2 class="mb-1">Security Settings</h2>
            <p class="text-muted mb-0">
                Manage your account security by updating your password and ensuring your account remains protected.
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
                    <i class="ti ti-lock me-2"></i> Change Password
                </h5>

                <form action="{{ route('admin.settings.security.update') }}" method="POST">
                    @csrf

                    <div class="mb-3">
                        <label class="form-label">Current Password</label>
                        <input type="password" name="current_password" class="form-control" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">New Password</label>
                        <input type="password" name="new_password" class="form-control" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Confirm New Password</label>
                        <input type="password" name="new_password_confirmation" class="form-control" required>
                    </div>

                    <button type="submit" class="btn btn-danger d-flex align-items-center gap-2">
                        <i class="ti ti-lock-check"></i> Update Password
                    </button>

                </form>

            </div>

        </div>

    </div>

</div>

@include('admin.components.alert-success')
@include('admin.components.alert-error')

@endsection