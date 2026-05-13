<div class="grow" style="max-width: 300px; min-width: 200px;">
    <div class="input-group search-hover">
        <span class="input-group-text bg-transparent border-end-0">
            <i class="ti ti-search text-muted"></i>
        </span>
        <input type="text" id="search-input" class="form-control border-start-0 ps-0" 
            placeholder="Cari produk...">
    </div>
</div>

<style>

.search-hover {
    border: 1px solid #ddd;
    border-radius: 6px;
    display: flex;
    transition: all 0.2s ease;
    overflow: hidden;
}

.search-hover:hover {
    border-color: #0d6efd; /* biru */
    background-color: #f8f9fa;
    box-shadow: 0 0 8px rgba(13, 110, 253, 0.3);
}

.search-hover:hover .input-group-text i {
    color: #0d6efd;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const tableBody = document.getElementById('product-table-body');
    if (!tableBody) return;

    const rows = Array.from(tableBody.getElementsByTagName('tr'));

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();

        rows.forEach(row => {
            const name = row.cells[1]?.textContent.toLowerCase() || '';
            const category = row.cells[2]?.textContent.toLowerCase() || '';

            if (name.includes(query) || category.includes(query)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
</script><?php /**PATH /Users/mac/Downloads/penjualan-iphone/resources/views/admin/components/search.blade.php ENDPATH**/ ?>