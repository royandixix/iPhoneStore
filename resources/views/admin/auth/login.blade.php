<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <title>Login Admin - Penjualan iPhone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/dist/assets/images/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/dist/assets/images/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16"
        href="{{ asset('assets/dist/assets/images/favicon-16x16.png') }}">
    <link rel="stylesheet" href="{{ asset('assets/dist/assets/css/main.css') }}">
</head>

<body>

    <div class="container d-flex align-items-center justify-content-center min-vh-100">
        <div class="card" style="max-width:420px; width:100%;">
            <div class="card-body p-5">

                <div class="text-center mb-3">
                    <a href="{{ url('/admin/dashboard') }}" class="mb-4 d-inline-block">
                        <img src="{{ asset('assets/dist/assets/images/logo.svg') }}" alt="Logo" width="120">
                    </a>
                    <h1 class="card-title mb-5 h5">Masuk ke Akun Admin</h1>
                </div>

                <form method="POST" action="{{ route('admin.login.post') }}" class="needs-validation mt-3" novalidate>
                    @csrf

                    <div class="mb-3">
                        <label for="email" class="form-label">Alamat Email</label>
                        <input id="email" type="email" name="email"
                            class="form-control @error('email') is-invalid @enderror"
                            placeholder="admin@email.com" value="{{ old('email') }}" required autofocus>
                        @error('email')
                            <div class="invalid-feedback d-block">{{ $message }}</div>
                        @enderror
                    </div>

                   

                    <div class="mb-3">
                        <label for="password" class="form-label d-flex justify-content-between">
                            <span>Password</span>
                            <a href="#" class="small link-primary">Lupa Password?</a>
                        </label>
                        <input id="password" type="password" name="password"
                            class="form-control @error('password') is-invalid @enderror" placeholder="Password" required
                            minlength="6">
                        @error('password')
                            <div class="invalid-feedback d-block">{{ $message }}</div>
                        @enderror
                    </div>

                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="form-check">
                            <input id="remember" class="form-check-input" type="checkbox" name="remember">
                            <label class="form-check-label small" for="remember">Ingat Saya</label>
                        </div>
                    </div>

                    <button class="btn btn-primary w-100" type="submit">Masuk</button>
                </form>

                <div class="text-center mt-3 small text-muted">
                    Belum punya akun? <a href="{{ route('admin.register') }}" class="link-primary">Daftar di sini</a>
                </div>

            </div>
        </div>
    </div>

    <!-- Main JS -->
    <script src="{{ asset('assets/dist/assets/js/main.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!-- Include komponen PNotify -->
    @include('admin.components.toastr')

</body>

</html>