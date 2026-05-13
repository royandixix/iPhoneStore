<?php $__env->startSection('title', 'Settings'); ?>

<?php $__env->startSection('content'); ?>

<div class="container-fluid">

    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h2 class="mb-1">Settings</h2>
            <p class="text-muted mb-0">
                Manage and customize your system configuration, including store information,
                user profile settings, security preferences, and overall application behavior
                to ensure your iPhone sales platform runs smoothly and efficiently.
            </p>
        </div>
    </div>

    <div class="row">

        <div class="col-md-3">
           <?php echo $__env->make('admin.settings.components.sidebar', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
        </div>

        <div class="col-md-9">

            <div class="card p-4 mb-4 shadow-sm border-0">
                <h5 class="mb-3 d-flex align-items-center">
                    <i class="ti ti-building me-2"></i> Store Settings
                </h5>

                <form>
                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Store Name</label>
                            <input type="text" class="form-control" placeholder="iPhone Store">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" class="form-control" placeholder="+62 812 xxxx">
                        </div>

                        <div class="col-md-12 mb-3">
                            <label class="form-label">Address</label>
                            <textarea class="form-control" rows="2"></textarea>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="store@email.com">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Logo</label>
                            <input type="file" class="form-control">
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary mt-2 d-flex align-items-center gap-2">
                        <i class="ti ti-device-floppy"></i> Save Changes
                    </button>
                </form>
            </div>

            <div class="card p-4 mb-4 shadow-sm border-0">
                <h5 class="mb-3 d-flex align-items-center">
                    <i class="ti ti-user me-2"></i> Profile Settings
                </h5>

                <form>
                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control">
                        </div>

                        <div class="col-md-12 mb-3">
                            <label class="form-label">Photo</label>
                            <input type="file" class="form-control">
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary d-flex align-items-center gap-2">
                        <i class="ti ti-check"></i> Save Profile
                    </button>
                </form>
            </div>

            <div class="card p-4 shadow-sm border-0">
                <h5 class="mb-3 d-flex align-items-center">
                    <i class="ti ti-lock me-2"></i> Security
                </h5>

                <form>

                    <div class="mb-3">
                        <label class="form-label">Current Password</label>
                        <input type="password" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">New Password</label>
                        <input type="password" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Confirm Password</label>
                        <input type="password" class="form-control">
                    </div>

                    <button type="submit" class="btn btn-danger d-flex align-items-center gap-2">
                        <i class="ti ti-lock-check"></i> Change Password
                    </button>

                </form>
            </div>

        </div>

    </div>

</div>

<?php echo $__env->make('admin.components.confirm-delete', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php echo $__env->make('admin.components.alert-success', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php echo $__env->make('admin.components.alert-error', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/settings/index.blade.php ENDPATH**/ ?>