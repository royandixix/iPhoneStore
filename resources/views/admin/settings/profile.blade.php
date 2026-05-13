@extends('admin.layouts.app')
@section('title', 'Profile Settings')

@section('content')

<div class="container-fluid">

    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h2 class="mb-1">Profile Settings</h2>
            <p class="text-muted mb-0">
                Update your personal information, profile photo, and account details
                to keep your administrator account accurate and secure.
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
                    <i class="ti ti-user me-2"></i> Account Profile
                </h5>

                <form action="{{ route('admin.settings.profile.update') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <div class="text-center mb-4">

                        <img id="preview-image"
                             src="{{ auth()->user()->photo ? asset('storage/' . auth()->user()->photo) : 'https://via.placeholder.com/120' }}"
                             class="rounded-circle mb-3"
                             width="120" height="120"
                             style="object-fit: cover;">

                        <input type="file" name="photo" id="photo-input" class="form-control">
                    </div>

                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" name="name" class="form-control"
                                   value="{{ old('name', auth()->user()->name) }}" required>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control"
                                   value="{{ old('email', auth()->user()->email) }}" required>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" name="phone" class="form-control"
                                   value="{{ old('phone', auth()->user()->phone) }}">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Role</label>
                            <input type="text" class="form-control"
                                   value="{{ auth()->user()->role }}" disabled>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label class="form-label">Address</label>
                            <textarea name="address" class="form-control" rows="3">{{ old('address', auth()->user()->address) }}</textarea>
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary d-flex align-items-center gap-2">
                        <i class="ti ti-device-floppy"></i> Save Profile
                    </button>

                </form>

            </div>

        </div>

    </div>

</div>

@include('admin.components.alert-success')
@include('admin.components.alert-error')

<script>
document.getElementById('photo-input').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        document.getElementById('preview-image').src = URL.createObjectURL(file);
    }
});
</script>

@endsection