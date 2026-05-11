<div class="row g-3 mb-4">
    <div class="col-12 col-sm-6 col-md-3">
        <div class="card h-100">
            <div class="card-body p-4">
                <h6 class="mb-4">Total Produk</h6>
                <h3 class="mb-1 fw-bold" id="total-products">0</h3>
                <p class="mb-0 text-success small">
                    <i class="ti ti-arrow-up"></i> <span id="revenue-change">0%</span> dari bulan lalu
                </p>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-6 col-md-3">
        <div class="card h-100">
            <div class="card-body p-4">
                <h6 class="mb-4">Produk Terjual</h6>
                <h3 class="mb-1 fw-bold" id="products-sold">0</h3>
                <p class="mb-0 text-success small">
                    <i class="ti ti-arrow-up"></i> <span id="sold-change">0%</span> dari bulan lalu
                </p>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-6 col-md-3">
        <div class="card h-100">
            <div class="card-body p-4">
                <h6 class="mb-4">Produk Stok Rendah</h6>
                <h3 class="mb-1 fw-bold" id="low-stock">0</h3>
                <p class="mb-0 text-danger small">
                    <i class="ti ti-arrow-down"></i> <span id="low-change">0%</span> dari bulan lalu
                </p>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-6 col-md-3">
        <div class="card h-100">
            <div class="card-body p-4">
                <h6 class="mb-4">Habis Stok</h6>
                <h3 class="mb-1 fw-bold" id="out-stock">0</h3>
                <p class="mb-0 text-danger small">
                    <i class="ti ti-arrow-down"></i> <span id="out-change">0%</span> dari bulan lalu
                </p>
            </div>
        </div>
    </div>
</div>

<div class="row mb-4">
    <div class="col-12">
        <div class="card">
            <div class="card-body p-4">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3 gap-2">
                    <h2 class="mb-0 fs-5">Ikhtisar Penjualan</h2>
                    <div class="controls">
                        <button id="btn-random" class="btn btn-light btn-sm">Acak Data</button>
                        <button id="btn-update" class="btn btn-primary btn-sm">Tampilkan Tahun Ini</button>
                    </div>
                </div>
                <canvas id="salesChart" height="300"></canvas>
                <div class="d-flex justify-content-end mt-2">
                    <a href="#" class="small">Lihat laporan lengkap</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row mb-4">
    <div class="col-12">
        <div class="card">
            <div class="card-body p-4">
                <h2 class="mb-3 fs-5">Produk Teratas</h2>
                <div class="list-group list-group-flush" id="top-products-list">
                    <div class="text-center text-secondary py-2">Memuat produk teratas...</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {

    // ====== Fungsi update statistik ======
    function loadStats() {
        fetch("{{ route('admin.products.stats') }}")
            .then(res => res.json())
            .then(data => {
                document.getElementById('total-products').innerText = data.totalProducts ?? 0;
                document.getElementById('products-sold').innerText = data.totalSold ?? 0;
                document.getElementById('low-stock').innerText = data.lowStock ?? 0;
                document.getElementById('out-stock').innerText = data.outStock ?? 0;
            })
            .catch(err => console.error('Stats error:', err));
    }

    // ====== Fungsi update top products ======
    function loadTopProducts() {
        fetch("{{ route('admin.products.top') }}")
            .then(res => res.json())
            .then(products => {
                const list = document.getElementById('top-products-list');
                list.innerHTML = '';
                if (products.length === 0) {
                    list.innerHTML = '<div class="text-center text-secondary py-2">Belum ada produk teratas</div>';
                    return;
                }
                products.forEach(p => {
                    const item = document.createElement('div');
                    item.classList.add('list-group-item','p-3','d-flex','align-items-center');
                    item.style.cursor = 'pointer';
                    item.innerHTML = `
                        <div class="me-3">
                            <img src="${p.image_url}" alt="${p.name}" class="rounded" style="width:48px;height:48px;object-fit:cover;">
                        </div>
                        <div class="flex-grow-1 d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-0">${p.name}</h6>
                                <small class="text-secondary">${p.sold ?? 0} unit terjual</small>
                            </div>
                            <strong>${new Intl.NumberFormat('id-ID',{ style:'currency', currency:'IDR' }).format(p.total ?? 0)}</strong>
                        </div>
                    `;
                    list.appendChild(item);
                });
            })
            .catch(err => console.error('Top products error:', err));
    }

    // ====== Fungsi update sales chart ======
    let salesChart;
    function loadSalesChart() {
        fetch("{{ route('admin.products.salesData') }}")
            .then(res => res.json())
            .then(data => {
                const ctx = document.getElementById('salesChart').getContext('2d');
                if(salesChart) salesChart.destroy(); // hapus chart lama
                salesChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.map(d => d.month),
                        datasets: [{
                            label: 'Produk Terjual',
                            data: data.map(d => d.sold),
                            borderColor: '#007bff',
                            backgroundColor: 'rgba(0,123,255,0.1)',
                            fill: true,
                            tension: 0.3
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false },
                            tooltip: { mode: 'index', intersect: false }
                        },
                        scales: {
                            y: { beginAtZero: true }
                        }
                    }
                });
            })
            .catch(err => console.error('Sales chart error:', err));
    }

    // ====== Inisialisasi ======
    loadStats();
    loadTopProducts();
    loadSalesChart();

    // Tombol acak & update (dummy)
    document.getElementById('btn-random').addEventListener('click', loadSalesChart);
    document.getElementById('btn-update').addEventListener('click', loadSalesChart);

});
</script>