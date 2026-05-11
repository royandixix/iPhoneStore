<script>
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function () {
            const form = btn.closest('form');

            const myStack = new PNotify.Stack({
                dir1: 'down',       // notifikasi turun ke bawah dari posisi awal
                firstpos1: 25,      // jarak dari atas halaman
                push: 'top',        // pastikan notifikasi muncul di atas
                modal: true,        // overlay modal
                overlayClose: false,
                context: document.body // pastikan muncul di atas semua konten
            });

            const notice = PNotify.notice({
                title: 'Konfirmasi Hapus',
                text: 'Yakin ingin menghapus produk ini?',
                icon: 'fas fa-question-circle',
                hide: false,
                closer: false,
                sticker: false,
                destroy: true,
                stack: myStack,
                modules: new Map([
                    ...PNotify.defaultModules,
                    [PNotifyConfirm, { confirm: true, prompt: false }]
                ])
            });

            notice.on('pnotify:confirm', () => form.submit());
            notice.on('pnotify:cancel', () => notice.close());
        });
    });
});
</script>