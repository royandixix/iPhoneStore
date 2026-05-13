<?php if(session('error')): ?>
<script>
document.addEventListener('DOMContentLoaded', function() {
    PNotify.error({
        title: 'Error',
        text: <?php echo json_encode(session('error'), 15, 512) ?>,
        icon: 'fas fa-exclamation-triangle',
        hide: true,
        delay: 5000,
        stack: new PNotify.Stack({
            dir1: 'down',
            firstpos1: 25,
            modal: false,
            overlayClose: false,
            push: 'top'
        })
    });
});
</script>
<?php endif; ?><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/components/alert-error.blade.php ENDPATH**/ ?>