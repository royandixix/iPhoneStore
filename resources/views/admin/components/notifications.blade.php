{{-- <!-- PNotify CSS -->
<link href="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/PNotify.css" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/BrightTheme.css" rel="stylesheet"/>

<!-- Custom warna -->
<style>
.pnotify-success { background-color: #28a745 !important; color: #fff !important; border: 1px solid #28a745 !important; }
.pnotify-error { background-color: #dc3545 !important; color: #fff !important; border: 1px solid #dc3545 !important; }
</style>

<!-- PNotify JS -->
<script src="https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/dist/iife/PNotify.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@pnotify/mobile@5.2.0/dist/iife/PNotifyMobile.js"></script>

<script>
$(function() {
    const pnotifyOptions = { delay: 3000, closer: true, sticker: false, modules: { Mobile: { swipeDismiss: true } } };

    @if(session('success'))
        PNotify.success(Object.assign({}, pnotifyOptions, { text: "{{ session('success') }}" }));
    @endif

    @if(session('error'))
        PNotify.error(Object.assign({}, pnotifyOptions, { text: "{{ session('error') }}" }));
    @endif

    @if($errors->any())
        PNotify.error(Object.assign({}, pnotifyOptions, { text: "{{ $errors->first() }}" }));
    @endif
});
</script> --}}