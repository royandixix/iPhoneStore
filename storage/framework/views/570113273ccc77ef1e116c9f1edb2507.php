<aside id="sidebar" class="sidebar">

    <!-- LOGO -->
    <div class="logo-area mb-3">
        <a href="<?php echo e(route('admin.dashboard')); ?>" class="d-inline-flex align-items-center">
            <img src="<?php echo e(asset('assets/dist/assets/images/logo.svg')); ?>" width="24">
            <span class="logo-text ms-2">
                <img src="<?php echo e(asset('assets/dist/assets/images/logo.svg')); ?>">
            </span>
        </a>
    </div>

    <ul class="nav flex-column">

        <!-- MAIN -->
        <li class="px-4 py-2">
            <small class="text-muted">MAIN</small>
        </li>

        <li>
            <a class="nav-link <?php echo e(request()->routeIs('admin.dashboard') ? 'active' : ''); ?>"
                href="<?php echo e(route('admin.dashboard')); ?>">
                <i class="ti ti-home"></i>
                <span>Dashboard</span>
            </a>
        </li>

        <!-- ================= MANAGEMENT ================= -->
        <li class="px-4 py-2 mt-3">
            <small class="text-muted">MANAGEMENT</small>
        </li>

        <!-- PRODUCTS -->
        <li class="nav-item">

            <a class="nav-link d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
                data-bs-target="#productsMenu">

                <span class="d-flex align-items-center gap-2">
                    <i class="ti ti-box-seam"></i>
                    Products
                </span>

                <i class="ti ti-chevron-down rotate-icon"></i>
            </a>

            <div class="collapse <?php echo e(request()->routeIs('admin.products.*') ? 'show' : ''); ?>" id="productsMenu">

                <ul class="nav flex-column ms-4">

                    <li>
                        <a class="nav-link <?php echo e(request()->routeIs('admin.products.handphone.*') ? 'active' : ''); ?>"
                            href="<?php echo e(route('admin.products.handphone.index')); ?>">
                            <i class="ti ti-device-mobile"></i>
                            Handphone
                        </a>
                    </li>

                    <li>
                        <a class="nav-link <?php echo e(request()->routeIs('admin.products.accessories.*') ? 'active' : ''); ?>"
                            href="<?php echo e(route('admin.products.accessories.index')); ?>">
                            <i class="ti ti-headphones"></i>
                            Accessories
                        </a>
                    </li>

                </ul>
            </div>
        </li>

        <!-- ORDERS -->
        <a class="nav-link <?php echo e(request()->routeIs('admin.orders.*') ? 'active' : ''); ?>"
            href="<?php echo e(route('admin.orders.index')); ?>">
            <i class="ti ti-shopping-cart"></i>
            Orders
        </a>

        <!-- CUSTOMERS -->
        <li>
            <a class="nav-link <?php echo e(request()->routeIs('admin.customers.*') ? 'active' : ''); ?>"
                href="<?php echo e(route('admin.customers.index')); ?>">
                <i class="ti ti-users"></i>
                Customers
            </a>
        </li>

        <!-- ================= SALES ================= -->
        <li class="px-4 py-2 mt-3">
            <small class="text-muted">SALES</small>
        </li>

        <li>
            <a class="nav-link <?php echo e(request()->routeIs('admin.laporan.*') ? 'active' : ''); ?>"
                href="<?php echo e(route('admin.laporan.produk.review')); ?>">
                <i class="ti ti-file-text"></i>
                Laporan
            </a>
        </li>

        <a class="nav-link <?php echo e(request()->routeIs('admin.penjualan.*') ? 'active' : ''); ?>"
            href="<?php echo e(route('admin.penjualan.index')); ?>">
            <i class="ti ti-report-money"></i>
            Penjualan
        </a>

        <!-- ================= SYSTEM ================= -->
        <li class="px-4 py-2 mt-3">
            <small class="text-muted">SYSTEM</small>
        </li>

        <li>
            <a class="nav-link" href="#">
                <i class="ti ti-category"></i>
                Categories
            </a>
        </li>

        <li>
            <a class="nav-link <?php echo e(request()->routeIs('admin.settings.*') ? 'active' : ''); ?>"
                href="<?php echo e(route('admin.settings.index')); ?>">
                <i class="ti ti-settings"></i>
                Settings
            </a>
        </li>

        <!-- ================= ACCOUNT ================= -->
        <li class="px-4 pt-4 pb-2">
            <small class="text-muted">ACCOUNT</small>
        </li>

        <li>
            <a class="nav-link text-danger" href="#"
                onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                <i class="ti ti-logout"></i>
                Logout
            </a>

            <form id="logout-form" action="<?php echo e(route('admin.logout')); ?>" method="POST" class="d-none">
                <?php echo csrf_field(); ?>
            </form>
        </li>

    </ul>
</aside>
<style>
    /* ICON ROTATION */
    .rotate-icon {
        transition: transform 0.3s ease;
    }

    .nav-link[aria-expanded="true"] .rotate-icon {
        transform: rotate(180deg);
    }

    /* ACTIVE MENU */
    .nav-link.active {
        background: rgba(13, 110, 253, 0.08);
        border-radius: 8px;
    }

    /* SMOOTH COLLAPSE ANIMATION */
    .collapse.show {
        animation: fadeSlide 0.25s ease;
    }

    @keyframes fadeSlide {
        from {
            opacity: 0;
            transform: translateY(-6px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* ICON SPACING */
    .nav-link i {
        margin-right: 6px;
    }
</style>
<?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/partials/sidebar.blade.php ENDPATH**/ ?>