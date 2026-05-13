<link href="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/PNotify.css" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/BrightTheme.css" rel="stylesheet"/>

<script src="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/PNotify.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@pnotify/mobile@5.2.0/dist/PNotifyMobile.js"></script>

<style>
/* Override warna success tanpa menghapus BrightTheme */
.pnotify-container.custom-success.pnotify-type-success {
    background-color: #245824 !important; /* hijau solid */
    color: #ffffff !important; /* teks putih */
}

/* Text & icon tetap putih */
.pnotify-container.custom-success.pnotify-type-success .pnotify-title,
.pnotify-container.custom-success.pnotify-type-success .pnotify-text,
.pnotify-container.custom-success.pnotify-type-success .pnotify-icon {
    color: #ffffff !important;
    text-shadow: none !important;
}

/* Close button putih */
.pnotify-container.custom-success.pnotify-type-success .pnotify-closer,
.pnotify-container.custom-success.pnotify-type-success .pnotify-sticker {
    color: #ffffff !important;
}
</style>

<script>
const pnotifyOptions = {
    delay: 3000,
    closer: true,
    sticker: false,
    modules: { Mobile: { swipeDismiss: true } }
};

<?php if(session('success')): ?>
    PNotify.success(Object.assign({}, pnotifyOptions, {
        title: 'Success!',
        text: "<?php echo e(session('success')); ?>",
        addClass: 'custom-success'
    }));
<?php endif; ?>

<?php if(session('error')): ?>
    PNotify.error(Object.assign({}, pnotifyOptions, {
        title: 'Alert!',
        text: "<?php echo e(session('error')); ?>"
    }));
<?php endif; ?>

<?php if($errors->any()): ?>
    PNotify.error(Object.assign({}, pnotifyOptions, {
        title: 'Alert!',
        text: "<?php echo e($errors->first()); ?>"
    }));
<?php endif; ?>
</script><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/components/toastr.blade.php ENDPATH**/ ?>