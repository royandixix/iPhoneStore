@extends('admin.layouts.app')
@section('title', 'Appearance Settings')

@section('content')

    <div class="container-fluid">

        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 class="mb-1">Appearance Settings</h2>
                <p class="text-muted mb-0">
                    Customize theme, layout, and visual preferences of your admin panel.
                </p>
            </div>
        </div>

        <div class="row">

            <div class="col-md-3">
                @include('admin.settings.components.sidebar')
            </div>

            <div class="col-md-9">

                <div class="card p-4 shadow-sm border-0">

                    <h5 class="mb-4">
                        <i class="ti ti-palette me-2"></i> Theme Mode
                    </h5>

                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="theme" value="light" id="lightMode">
                        <label class="form-check-label" for="lightMode">Light Mode</label>
                    </div>

                    <div class="form-check mb-4">
                        <input class="form-check-input" type="radio" name="theme" value="dark" id="darkMode">
                        <label class="form-check-label" for="darkMode">Dark Mode</label>
                    </div>

                </div>

            </div>

        </div>

    </div>

    <script>
        const light = document.getElementById('lightMode')
        const dark = document.getElementById('darkMode')

        const saved = localStorage.getItem('theme') || 'light'

        if (saved === 'dark') {
            document.body.classList.add('dark-mode')
            dark.checked = true
        } else {
            light.checked = true
        }

        light.addEventListener('change', () => {
            document.body.classList.remove('dark-mode')
            localStorage.setItem('theme', 'light')
        })

        dark.addEventListener('change', () => {
            document.body.classList.add('dark-mode')
            localStorage.setItem('theme', 'dark')
        })
    </script>

@endsection
