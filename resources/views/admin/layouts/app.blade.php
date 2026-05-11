<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>@yield('title', 'InApp Inventory Dashboard')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/dist/assets/images/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/dist/assets/images/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16"
        href="{{ asset('assets/dist/assets/images/favicon-16x16.png') }}">

    <link rel="stylesheet" href="{{ asset('assets/dist/assets/css/main.css') }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@pnotify/core/dist/PNotify.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@pnotify/confirm/dist/PNotifyConfirm.css" />

    @stack('styles')
</head>

<body>

    <div id="overlay" class="overlay"></div>

    @include('admin.partials.navbar')
    @include('admin.partials.sidebar')

    <main id="content" class="content py-10">
        <div class="container-fluid">
            @yield('content')

            @include('admin.partials.footer') <!-- footer dipanggil di sini -->
        </div>
    </main>

    <script src="{{ asset('assets/dist/assets/js/main.js') }}"></script>
    <script src="{{ asset('js/product.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@pnotify/core/dist/PNotify.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@pnotify/confirm/dist/PNotifyConfirm.js"></script>

    @include('admin.components.toastr')
    @stack('scripts')

</body>

</html>
