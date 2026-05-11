<nav id="topbar" class="navbar bg-white border-bottom fixed-top topbar px-3">
    <button id="toggleBtn" class="d-none d-lg-inline-flex btn btn-light btn-icon btn-sm">
        <i class="ti ti-layout-sidebar-left-expand"></i>
    </button>

    <button id="mobileBtn" class="btn btn-light btn-icon btn-sm d-lg-none me-2">
        <i class="ti ti-layout-sidebar-left-expand"></i>
    </button>

    <div>
        <ul class="list-unstyled d-flex align-items-center mb-0 gap-1">

            <li>
                <a class="position-relative btn-icon btn-sm btn-light btn rounded-circle" data-bs-toggle="dropdown"
                    href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.5">
                        <path
                            d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                    <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">2</span>
                </a>
            </li>

            <li class="ms-3 dropdown">
                <a href="#" data-bs-toggle="dropdown">
                    <img src="{{ asset('assets/dist/assets/images/avatar-1.jpg') }}"
                        class="avatar avatar-sm rounded-circle" />
                </a>

                <div class="dropdown-menu dropdown-menu-end p-0" style="min-width:200px;">

                    <div class="d-flex gap-3 align-items-center border-bottom px-3 py-3">
                        <img src="{{ asset('assets/dist/assets/images/avatar-1.jpg') }}"
                            class="avatar avatar-md rounded-circle" />
                        <div>
                            <h4 class="mb-0 small">{{ auth()->user()->name }}</h4>
                            <p class="mb-0 small text-muted">{{ auth()->user()->email }}</p>
                        </div>
                    </div>

                    <div class="p-3 d-flex flex-column gap-2 small">

                        <a href="{{ route('admin.dashboard') }}" class="text-decoration-none">
                            <i class="ti ti-home me-1"></i>Dashboard
                        </a>

                        <a href="{{ route('admin.profile.index') }}" class="text-decoration-none">
                            <i class="ti ti-user me-1"></i>Account Settings
                        </a>

                        <form action="{{ route('admin.logout') }}" method="POST" class="mt-2">
                            @csrf
                            <button type="submit" class="btn btn-sm btn-danger w-100">
                                <i class="ti ti-logout me-1"></i>Logout
                            </button>
                        </form>

                    </div>

                </div>
            </li>

        </ul>
    </div>
</nav>
