<div class="card p-3 shadow-sm border-0">
    <ul class="nav flex-column gap-2">

        <li>
            <a href="{{ route('admin.settings.store') }}"
                class="nav-link d-flex align-items-center {{ request()->routeIs('admin.settings.store') ? 'active' : '' }}">
                <i class="ti ti-building me-2"></i> Store
            </a>
        </li>

        <li>
            <a href="{{ route('admin.settings.profile') }}"
                class="nav-link d-flex align-items-center {{ request()->routeIs('admin.settings.profile') ? 'active' : '' }}">
                <i class="ti ti-user me-2"></i> Profile
            </a>
        </li>

        <li>
            <a href="{{ route('admin.settings.security') }}"
                class="nav-link d-flex align-items-center {{ request()->routeIs('admin.settings.security') ? 'active' : '' }}">
                <i class="ti ti-lock me-2"></i> Security
            </a>
        </li>

        <li>
            <a href="{{ route('admin.settings.notifications') }}"
                class="nav-link d-flex align-items-center {{ request()->routeIs('admin.settings.notifications') ? 'active' : '' }}">
                <i class="ti ti-bell me-2"></i> Notifications
            </a>
        </li>

        <li>
            <a href="{{ route('admin.settings.appearance') }}"
                class="nav-link d-flex align-items-center {{ request()->routeIs('admin.settings.appearance') ? 'active' : '' }}">
                <i class="ti ti-palette me-2"></i> Appearance
            </a>
        </li>
    </ul>
</div>
