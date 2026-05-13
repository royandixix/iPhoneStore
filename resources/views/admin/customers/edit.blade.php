@extends('admin.layouts.app')
@section('title', 'Edit Customer')

@section('content')
<div class="container-fluid">

    <!-- HEADER -->
    <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
            <div>
                <h1 class="fs-3 mb-1">Edit Customer</h1>
                <p class="mb-0">Ubah data pelanggan</p>
            </div>

            <a href="{{ route('admin.customers.index') }}" class="btn btn-secondary">
                Kembali
            </a>
        </div>
    </div>

    <!-- FORM -->
    <div class="row">
        <div class="col-lg-8">

            <div class="card shadow-sm border-0">
                <div class="card-body">

                    <form action="{{ route('admin.customers.update', $customer->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <!-- NAME -->
                        <div class="mb-3">
                            <label class="form-label">Nama</label>
                            <input type="text"
                                   name="name"
                                   class="form-control"
                                   value="{{ old('name', $customer->name) }}"
                                   required>
                        </div>

                        <!-- EMAIL -->
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email"
                                   name="email"
                                   class="form-control"
                                   value="{{ old('email', $customer->email) }}"
                                   required>
                        </div>

                        <!-- PHONE -->
                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text"
                                   name="phone"
                                   class="form-control"
                                   value="{{ old('phone', $customer->phone) }}">
                        </div>

                        <!-- ADDRESS -->
                        <div class="mb-3">
                            <label class="form-label">Address</label>
                            <textarea name="address"
                                      class="form-control"
                                      rows="3">{{ old('address', $customer->address) }}</textarea>
                        </div>

                        <!-- PHOTO -->
                        <div class="mb-3">
                            <label class="form-label">Photo</label>
                            <input type="file" name="photo" class="form-control">

                            @if($customer->photo)
                                <img src="{{ asset('storage/' . $customer->photo) }}"
                                     width="80"
                                     class="mt-2 rounded">
                            @endif
                        </div>

                        <!-- ACTION -->
                        <div class="d-flex gap-2">
                            <button type="submit" class="btn btn-primary">
                                Update
                            </button>

                            <a href="{{ route('admin.customers.index') }}" class="btn btn-light">
                                Cancel
                            </a>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    </div>

</div>
@endsection