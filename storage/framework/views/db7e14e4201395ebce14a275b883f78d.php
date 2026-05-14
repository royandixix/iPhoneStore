<?php $__env->startSection('title', 'Profile Settings'); ?>
<?php $__env->startSection('content'); ?>
    <div class="container-fluid">
        <div class="row mb-4">
            <div class="col-12">
                <h1 class="fs-3 mb-1">Pengaturan Akun</h1>
                <p class="text-muted">Kelola dan perbarui informasi akun Anda dengan aman dan mudah</p>
            </div>
        </div>
        <?php echo $__env->make('admin.components.toastr', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
        <?php if($errors->any()): ?>
            <div class="alert alert-danger">
                <ul class="mb-0">
                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <li><?php echo e($error); ?></li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </ul>
            </div>
        <?php endif; ?>
        <div class="row g-4">
            <div class="col-lg-6">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5>Informasi Akun</h5><button class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                data-bs-target="#editProfileModal">Edit</button>
                        </div>
                        <p><strong>Nama:</strong> <?php echo e(auth()->user()->name); ?></p>
                        <p><strong>Email:</strong> <?php echo e(auth()->user()->email); ?></p>
                        <p><strong>No HP:</strong> <?php echo e(auth()->user()->phone ?? '-'); ?></p>
                        <p><strong>Alamat:</strong> <?php echo e(auth()->user()->address ?? '-'); ?></p>
                        <p><strong>Role:</strong> <?php echo e(auth()->user()->role); ?></p>
                        <button class="btn btn-outline-danger w-100 mt-3" data-bs-toggle="modal"
                            data-bs-target="#deleteAccountModal">Hapus Akun</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card h-100 text-center">
                    <div class="card-body">
                        <img id="previewImage"
                            src="<?php echo e(auth()->user()->photo ? asset('storage/' . auth()->user()->photo) : asset('assets/dist/assets/images/avatar-1.jpg')); ?>"
                            class="rounded-circle mb-3 shadow" width="110" height="110" style="object-fit:cover;">
                        <h5><?php echo e(auth()->user()->name); ?></h5>
                        <p class="text-muted"><?php echo e(auth()->user()->email); ?></p>
                        <span class="badge bg-success"><?php echo e(auth()->user()->role); ?></span>
                        <button class="btn btn-light w-100 mt-3" data-bs-toggle="modal"
                            data-bs-target="#changePasswordModal">Ubah Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="editProfileModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="<?php echo e(route('admin.profile.update')); ?>" method="POST" enctype="multipart/form-data"><?php echo csrf_field(); ?>
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Profile</h5><button type="button" class="btn-close"
                            data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3 text-center">
                            <img id="preview"
                                src="<?php echo e(auth()->user()->photo ? asset('storage/' . auth()->user()->photo) : asset('assets/dist/assets/images/avatar-1.jpg')); ?>"
                                width="100" height="100" class="rounded-circle mb-2" style="object-fit:cover;">
                            <input type="file" name="photo" class="form-control" onchange="previewImage(event)">
                            <small class="text-muted">Klik simpan untuk menerapkan foto baru</small>
                        </div>
                        <div class="mb-3"><label>Nama</label><input type="text" name="name"
                                value="<?php echo e(auth()->user()->name); ?>" class="form-control" required></div>
                        <div class="mb-3"><label>Email</label><input type="email" name="email"
                                value="<?php echo e(auth()->user()->email); ?>" class="form-control" required></div>
                        <div class="mb-3"><label>No HP</label><input type="text" name="phone"
                                value="<?php echo e(auth()->user()->phone); ?>" class="form-control"></div>
                        <div class="mb-3"><label>Alamat</label>
                            <textarea name="address" class="form-control" rows="3"><?php echo e(auth()->user()->address); ?></textarea>
                        </div>
                    </div>
                    <div class="modal-footer"><button type="button" class="btn btn-light"
                            data-bs-dismiss="modal">Batal</button><button type="submit" class="btn btn-primary">Simpan
                            Perubahan</button></div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="changePasswordModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="<?php echo e(route('admin.profile.password')); ?>" method="POST"><?php echo csrf_field(); ?>
                    <div class="modal-header">
                        <h5 class="modal-title">Ubah Password</h5><button type="button" class="btn-close"
                            data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-2"><label class="small fw-bold">Password Lama</label><input type="password"
                                name="current_password" class="form-control" required></div>
                        <div class="mb-2"><label class="small fw-bold">Password Baru</label><input type="password"
                                name="password" class="form-control" required></div>
                        <div class="mb-2"><label class="small fw-bold">Konfirmasi Password Baru</label><input
                                type="password" name="password_confirmation" class="form-control" required></div>
                    </div>
                    <div class="modal-footer"><button type="button" class="btn btn-light"
                            data-bs-dismiss="modal">Batal</button><button type="submit" class="btn btn-danger">Update
                            Password</button></div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="deleteAccountModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="<?php echo e(route('admin.profile.delete')); ?>" method="POST"><?php echo csrf_field(); ?>
                    <div class="modal-header">
                        <h5 class="modal-title text-danger">Hapus Akun</h5><button type="button" class="btn-close"
                            data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p class="text-muted">Tindakan ini permanen. Masukkan password Anda untuk konfirmasi penghapusan
                            akun.</p>
                        <input type="password" name="password" class="form-control" required>
                    </div>
                    <div class="modal-footer"><button type="button" class="btn btn-light"
                            data-bs-dismiss="modal">Batal</button><button type="submit" class="btn btn-danger">Hapus
                            Permanen</button></div>
                </form>
            </div>
        </div>
    </div>

    <script>
        function previewImage(e) {
            const r = new FileReader();
            r.onload = function() {
                document.getElementById('preview').src = r.result
            };
            if (e.target.files[0]) {
                r.readAsDataURL(e.target.files[0])
            }
        }
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/profile/index.blade.php ENDPATH**/ ?>