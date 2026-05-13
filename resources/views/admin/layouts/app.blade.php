<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>@yield('title', 'InApp Inventory Dashboard')</title>
    <meta name="viewport"content="width=device-width,initial-scale=1">

    <link rel="apple-touch-icon"sizes="180x180" href="{{ asset('assets/dist/assets/images/apple-touch-icon.png') }}">
    <link rel="icon"type="image/png" sizes="32x32" href="{{ asset('assets/dist/assets/images/favicon-32x32.png') }}">
    <link rel="icon"type="image/png" sizes="16x16" href="{{ asset('assets/dist/assets/images/favicon-16x16.png') }}">

    <link rel="stylesheet"href="{{ asset('assets/dist/assets/css/main.css') }}">
    <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/@pnotify/core/dist/PNotify.css" />
    <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/@pnotify/confirm/dist/PNotifyConfirm.css" />
    <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">

    <style>
        body.dark-mode {
            background: #121212;
            color: #e4e6eb
        }

        body.dark-mode .card {
            background: #1e1e2f;
            color: #e4e6eb
        }

        body.dark-mode .form-control {
            background: #2c2c3a;
            border-color: #444;
            color: #fff
        }

        body.dark-mode .nav-link {
            color: #ccc
        }

        body.dark-mode .nav-link.active {
            background: #333;
            color: #fff
        }

        body.dark-mode .sidebar {
            background: #1a1a2e
        }

        body.dark-mode .navbar {
            background: #1a1a2e
        }
    </style>

    @stack('styles')
</head>

<body class="{{ session('theme') == 'dark' ? 'dark-mode' : '' }}">

    <div id="overlay"class="overlay"></div>

    @include('admin.partials.navbar')
    @include('admin.partials.sidebar')

    <main id="content"class="content py-10">
        <div class="container-fluid">
            @yield('content')
            @include('admin.partials.footer')
        </div>
    </main>

    <script src="{{ asset('assets/dist/assets/js/main.js') }}"></script>
    <script src="{{ asset('js/product.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@pnotify/core/dist/PNotify.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@pnotify/confirm/dist/PNotifyConfirm.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('input[name="theme"]').forEach(el => {
                el.addEventListener('change', function() {
                    document.body.classList.toggle('dark-mode', this.value === 'dark')
                })
            })
        })
    </script>

    @include('admin.components.toastr')
    @stack('scripts')

</body>

</html>
