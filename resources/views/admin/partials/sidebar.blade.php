<aside id="sidebar" class="sidebar">
    <div class="logo-area">
        <a href="{{ route('admin.dashboard') }}" class="d-inline-flex">
            <img src="{{ asset('assets/dist/assets/images/logo.svg') }}" width="24">
            <span class="logo-text ms-2">
                <img src="{{ asset('assets/dist/assets/images/logo.svg') }}">
            </span>
        </a>
    </div>

    <ul class="nav flex-column">

        <li class="px-4 py-2"><small class="nav-text">Main</small></li>

        <li>
            <a class="nav-link {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}"
               href="{{ route('admin.dashboard') }}">
                <i class="ti ti-home"></i>
                <span class="nav-text">Dashboard</span>
            </a>
        </li>

        <li>
            <a class="nav-link {{ request()->routeIs('admin.products.*') ? 'active' : '' }}"
               href="{{ route('admin.products.index') }}">
                <i class="ti ti-box-seam"></i>
                <span class="nav-text">Products</span>
            </a>
        </li>

        <li>
            <a class="nav-link {{ request()->routeIs('admin.laporan.*') ? 'active' : '' }}"
               href="{{ route('admin.laporan.produk.review') }}">
                <i class="ti ti-file-text"></i>
                <span class="nav-text">Laporan</span>
            </a>
        </li>

        <li>
            <a class="nav-link {{ request()->is('admin/penjualan*') ? 'active' : '' }}"
               href="{{ url('/admin/penjualan') }}">
                <i class="ti ti-shopping-cart"></i>
                <span class="nav-text">Penjualan</span>
            </a>
        </li>

        <li class="px-4 pt-4 pb-2"><small class="nav-text">Account</small></li>

        <li>
            <a class="nav-link" href="#"
               onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                <i class="ti ti-logout"></i>
                <span class="nav-text">Logout</span>
            </a>

            <form id="logout-form" action="{{ route('admin.logout') }}" method="POST" class="d-none">
                @csrf
            </form>
        </li>

    </ul>
</aside>