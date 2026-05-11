<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Laporan Produk</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 12px;
            color: #2c3e50
        }

        .header {
            width: 100%;
            margin-bottom: 10px
        }

        .header td {
            vertical-align: middle
        }

        .logo {
            font-size: 18px;
            font-weight: bold
        }

        .company {
            font-size: 14px;
            font-weight: bold
        }

        .small {
            font-size: 11px;
            color: #555
        }

        .line {
            border-top: 3px solid #2c3e50;
            margin: 10px 0 20px 0
        }

        .title {
            text-align: center;
            margin-bottom: 15px
        }

        .title h2 {
            margin: 0;
            font-size: 16px;
            letter-spacing: 1px
        }

        .info {
            margin-bottom: 15px
        }

        .info td {
            padding: 2px 0
        }

        .desc {
            margin-bottom: 15px;
            font-size: 12px;
            line-height: 1.5
        }

        table.data {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px
        }

        table.data th {
            background: #2c3e50;
            color: #fff;
            padding: 8px;
            text-align: center
        }

        table.data td {
            border: 1px solid #ccc;
            padding: 6px
        }

        .text-center {
            text-align: center
        }

        .text-right {
            text-align: right
        }

        .summary {
            margin-top: 10px;
            width: 100%
        }

        .summary td {
            padding: 5px
        }

        .footer {
            margin-top: 40px;
            width: 100%
        }

        .footer td {
            text-align: center
        }

        .nama {
            margin-top: 60px;
            text-decoration: underline;
            font-weight: bold
        }
    </style>
</head>

<body>

    <table class="header">
        <tr>
            <td>
                <div class="company">PT. TOKO PENJUALAN INDONESIA</div>
                <div class="small">Sistem Manajemen Produk & Penjualan</div>
                <div class="small">Jl. Contoh No.123, Indonesia</div>
            </td>
            <td class="text-right">
                <div class="small">Doc ID: PRD-{{ date('YmdHis') }}</div>
                <div class="small">Tanggal: {{ date('d F Y') }}</div>
            </td>
        </tr>
    </table>

    <div class="line"></div>

    <div class="title">
        <h2>LAPORAN DATA PRODUK</h2>
    </div>

    <table class="info">
        <tr>
            <td width="150">Periode</td>
            <td>: {{ date('F Y') }}</td>
        </tr>
        <tr>
            <td>Total Produk</td>
            <td>: {{ count($products) }}</td>
        </tr>
    </table>

    <div class="desc">
        Laporan ini merupakan rekapitulasi resmi data produk yang tercatat dalam sistem.
        Data mencakup informasi stok, kategori, dan harga yang digunakan untuk keperluan
        monitoring operasional, pengendalian inventaris, dan analisis bisnis.
    </div>

    <table class="data">
        <thead>
            <tr>
                <th>No</th>
                <th>Nama Produk</th>
                <th>Kategori</th>
                <th>Label</th>
                <th>Harga</th>
                <th>Stok</th>
               
            </tr>
        </thead>
        <tbody>
            @php $totalHarga=0; @endphp
            @foreach ($products as $i => $p)
                @php $totalHarga+=$p->price; @endphp
                <tr>
                    <td class="text-center">{{ $i + 1 }}</td>
                    <td>{{ $p->name }}</td>
                    <td>{{ $p->category ?? '-' }}</td>
                    <td>{{ $p->label ?? '-' }}</td>
                    <td class="text-right">Rp {{ number_format($p->price, 0, ',', '.') }}</td>
                    <td class="text-center">{{ $p->stock }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <table class="summary">
        <tr>
            <td width="70%"></td>
            <td><strong>Total Nilai Produk</strong></td>
            <td class="text-right"><strong>Rp {{ number_format($totalHarga, 0, ',', '.') }}</strong></td>
        </tr>
    </table>

    <table class="footer">
        <tr>
            <td width="60%"></td>
            <td>
                Dikeluarkan oleh,<br>
                Administrator Sistem
                <div class="nama">(_____________________)</div>
            </td>
        </tr>
    </table>

</body>

</html>
