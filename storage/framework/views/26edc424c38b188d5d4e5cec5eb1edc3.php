<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <title>Login Admin - Penjualan iPhone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo e(asset('assets/dist/assets/images/apple-touch-icon.png')); ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo e(asset('assets/dist/assets/images/favicon-32x32.png')); ?>">
    <link rel="icon" type="image/png" sizes="16x16"
        href="<?php echo e(asset('assets/dist/assets/images/favicon-16x16.png')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/dist/assets/css/main.css')); ?>">
</head>

<body>

    <div class="container d-flex align-items-center justify-content-center min-vh-100">
        <div class="card" style="max-width:420px; width:100%;">
            <div class="card-body p-5">

                <div class="text-center mb-3">
                    <a href="<?php echo e(url('/admin/dashboard')); ?>" class="mb-4 d-inline-block">
                        <img src="<?php echo e(asset('assets/dist/assets/images/logo.svg')); ?>" alt="Logo" width="120">
                    </a>
                    <h1 class="card-title mb-5 h5">Masuk ke Akun Admin</h1>
                </div>

                <form method="POST" action="<?php echo e(route('admin.login.post')); ?>" class="needs-validation mt-3" novalidate>
                    <?php echo csrf_field(); ?>

                    <div class="mb-3">
                        <label for="email" class="form-label">Alamat Email</label>
                        <input id="email" type="email" name="email"
                            class="form-control <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>"
                            placeholder="admin@email.com" value="<?php echo e(old('email')); ?>" required autofocus>
                        <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <div class="invalid-feedback d-block"><?php echo e($message); ?></div>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                   

                    <div class="mb-3">
                        <label for="password" class="form-label d-flex justify-content-between">
                            <span>Password</span>
                            <a href="#" class="small link-primary">Lupa Password?</a>
                        </label>
                        <input id="password" type="password" name="password"
                            class="form-control <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" placeholder="Password" required
                            minlength="6">
                        <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <div class="invalid-feedback d-block"><?php echo e($message); ?></div>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
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
                    Belum punya akun? <a href="<?php echo e(route('admin.register')); ?>" class="link-primary">Daftar di sini</a>
                </div>

            </div>
        </div>
    </div>

    <!-- Main JS -->
    <script src="<?php echo e(asset('assets/dist/assets/js/main.js')); ?>"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!-- Include komponen PNotify -->
    <?php echo $__env->make('admin.components.toastr', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

</body>

</html><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/auth/login.blade.php ENDPATH**/ ?>