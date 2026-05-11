{{-- @if(session('success'))
<script>
document.addEventListener('DOMContentLoaded', function() {
    PNotify.notice({
        title: 'Sukses',
        text: @json(session('success')),
        icon: 'fas fa-check-circle',
        hide: true,
        delay: 3000,
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
@endif --}}