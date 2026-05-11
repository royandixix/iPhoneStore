<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <title>Register Admin - Penjualan iPhone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/dist/assets/images/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/dist/assets/images/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/dist/assets/images/favicon-16x16.png') }}">
    <link rel="stylesheet" href="{{ asset('assets/dist/assets/css/main.css') }}">

    <!-- PNotify CSS -->
    <link href="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/PNotify.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/BrightTheme.css" rel="stylesheet"/>
</head>

<body>

<div class="container d-flex align-items-center justify-content-center min-vh-100">
    <div class="card" style="max-width:420px;width:100%;">
        <div class="card-body p-5">

            <div class="text-center mb-3">
                <a href="{{ url('/admin/dashboard') }}" class="mb-4 d-inline-block">
                    <img src="{{ asset('assets/dist/assets/images/logo.svg') }}" alt="Logo" width="120">
                </a>
                <h1 class="card-title mb-5 h5">Daftar Akun Admin</h1>
            </div>

            <form method="POST" action="{{ route('admin.register.post') }}" class="needs-validation mt-3" novalidate>
                @csrf

                <div class="mb-3">
                    <label for="name" class="form-label">Nama</label>
                    <input id="name" type="text" name="name"
                        class="form-control @error('name') is-invalid @enderror" placeholder="Nama lengkap"
                        value="{{ old('name') }}" required>
                    @error('name')
                        <div class="invalid-feedback d-block">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Alamat Email</label>
                    <input id="email" type="email" name="email"
                        class="form-control @error('email') is-invalid @enderror" placeholder="admin@email.com"
                        value="{{ old('email') }}" required>
                    @error('email')
                        <div class="invalid-feedback d-block">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="phone" class="form-label">No HP</label>
                    <input id="phone" type="text" name="phone"
                        class="form-control @error('phone') is-invalid @enderror" placeholder="08xxxxxxxxxx"
                        value="{{ old('phone') }}" required>
                    @error('phone')
                        <div class="invalid-feedback d-block">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="address" class="form-label">Alamat</label>
                    <textarea id="address" name="address" class="form-control @error('address') is-invalid @enderror"
                        placeholder="Alamat lengkap" required>{{ old('address') }}</textarea>
                    @error('address')
                        <div class="invalid-feedback d-block">{{ $message }}</div>
                    @enderror
                </div>

                <input type="hidden" name="role" value="admin">

                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="password" name="password"
                        class="form-control @error('password') is-invalid @enderror" placeholder="Password" required
                        minlength="8">
                    @error('password')
                        <div class="invalid-feedback d-block">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="password_confirmation" class="form-label">Konfirmasi Password</label>
                    <input id="password_confirmation" type="password" name="password_confirmation"
                        class="form-control" placeholder="Ulangi password" required>
                </div>

                <button class="btn btn-primary w-100" type="submit">Daftar</button>
            </form>

            <div class="text-center mt-3 small text-muted">
                Sudah punya akun? <a href="{{ route('admin.login') }}" class="link-primary">Login di sini</a>
            </div>

        </div>
    </div>
</div>

<!-- Main JS -->
<script src="{{ asset('assets/dist/assets/js/main.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- PNotify JS -->
<script src="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/PNotify.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@pnotify/mobile@5.2.0/dist/PNotifyMobile.js"></script>

<!-- PNotify Notifikasi -->
<script>
    const pnotifyOptions = {
        delay: 3000,
        closer: true,
        sticker: false,
        modules: { Mobile: { swipeDismiss: true } }
    };

    @if(session('success'))
        PNotify.success(Object.assign({}, pnotifyOptions, { text: "{{ session('success') }}" }));
    @endif

    @if(session('error'))
        PNotify.error(Object.assign({}, pnotifyOptions, { text: "{{ session('error') }}" }));
    @endif

    @if($errors->any())
        PNotify.error(Object.assign({}, pnotifyOptions, { text: "{{ $errors->first() }}" }));
    @endif
</script>

</body>
</html> 