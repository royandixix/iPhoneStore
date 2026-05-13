<?php $__env->startSection('title', 'Add Product'); ?>

<?php $__env->startSection('content'); ?>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                    <div>
                        <h1 class="fs-3 mb-1">Tambah Produk</h1>
                        <p class="mb-0">Kelola produk iPhone kamu</p>
                    </div>
                    <div>
                        <a href="<?php echo e(route('admin.products.handphone.index')); ?>" class="btn btn-primary">Kembali ke Produk</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body p-4">

                        <?php if($errors->any()): ?>
                            <div class="alert alert-danger">
                                <ul class="mb-0">
                                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li><?php echo e($error); ?></li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                            </div>
                        <?php endif; ?>

                        <form action="<?php echo e(route('admin.products.handphone.store')); ?>" method="POST" enctype="multipart/form-data">
                            <?php echo csrf_field(); ?>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Nama Produk</label>
                                    <input type="text" name="name" class="form-control"
                                        value="<?php echo e(old('name')); ?>" required>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Kategori</label>
                                    <select name="category" class="form-control" required>
                                        <option value="handphone">Handphone</option>
                                        <option value="accessories">Accessories</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Harga</label>
                                    <input type="text" id="price_formatted" class="form-control" required>
                                    <input type="hidden" name="price" id="price">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Stok</label>
                                    <input type="number" name="stock" class="form-control"
                                        value="<?php echo e(old('stock')); ?>" required>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Label</label>
                                <input type="text" name="label" class="form-control"
                                    placeholder="contoh: iPhone 15 Pro"
                                    value="<?php echo e(old('label')); ?>">
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Gambar</label>
                                <input type="file" name="image" id="image" class="form-control">

                                <div class="mt-3">
                                    <img id="preview-image" src="" alt="Preview"
                                        style="max-width:200px;display:none;border-radius:10px;">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Deskripsi</label>
                                <textarea name="description" class="form-control" rows="4"><?php echo e(old('description')); ?></textarea>
                            </div>

                            <div class="d-flex gap-2">
                                <button type="submit" class="btn btn-primary">Simpan</button>
                                <a href="<?php echo e(route('admin.products.handphone.index')); ?>" class="btn btn-secondary">Batal</a>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>

        <?php echo $__env->make('admin.components.alert-success', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
        <?php echo $__env->make('admin.components.alert-error', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
<script>
document.addEventListener('DOMContentLoaded', function () {

    const priceInput = document.getElementById('price_formatted');
    const priceHidden = document.getElementById('price');

    function formatRupiah(value) {
        let number = String(value || '').replace(/\D/g, '');
        if (number === '') number = '0';
        return 'Rp ' + new Intl.NumberFormat('id-ID').format(number);
    }

    priceInput.addEventListener('input', function (e) {
        const raw = e.target.value.replace(/\D/g, '');
        priceHidden.value = raw;
        e.target.value = formatRupiah(raw);
    });

    const inputImage = document.getElementById('image');
    const preview = document.getElementById('preview-image');

    if (inputImage) {
        inputImage.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    preview.setAttribute('src', e.target.result);
                    preview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    }

});
</script>
<?php $__env->stopPush(); ?>
<?php echo $__env->make('admin.layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/products/handphone/create.blade.php ENDPATH**/ ?>