<div class="modal fade" id="deleteModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Hapus Customer</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                Yakin ingin menghapus customer ini?
            </div>

            <div class="modal-footer">

                <form id="deleteForm" method="POST">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('DELETE'); ?>

                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Batal
                    </button>

                    <button type="submit" class="btn btn-danger">
                        Hapus
                    </button>
                </form>

            </div>

        </div>
    </div>
</div>

<script>
function openDeleteModal(id) {
    let form = document.getElementById('deleteForm');

    // set action dynamically
    form.action = `/admin/customers/${id}`;

    // show modal
    let modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();
}
</script><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/customers/components/modal-delete.blade.php ENDPATH**/ ?>