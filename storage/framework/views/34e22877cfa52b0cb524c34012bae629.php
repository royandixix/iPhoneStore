<div class="mb-3">
    <label class="form-label">Category Name</label>

    <input type="text"
           name="name"
           class="form-control"
           value="<?php echo e(old('name',$category->name ?? '')); ?>">

    <?php $__errorArgs = ['name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
        <small class="text-danger"><?php echo e($message); ?></small>
    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
</div>

<div class="mb-3">
    <label class="form-label">Description</label>

    <textarea name="description"
              rows="5"
              class="form-control"><?php echo e(old('description',$category->description ?? '')); ?></textarea>
</div>

<div class="form-check">
    <input type="checkbox"
           name="is_active"
           value="1"
           class="form-check-input"
           <?php echo e(old('is_active',$category->is_active ?? true) ? 'checked' : ''); ?>>

    <label class="form-check-label">
        Active Category
    </label>
</div><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/categories/components/form.blade.php ENDPATH**/ ?>