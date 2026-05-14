@extends('admin.layouts.app')
@section('title', 'Detail Order')

@section('content')

    <div class="container-fluid">

        <h2>Detail Order #{{ $order->id }}</h2>

        <p><strong>Customer:</strong> {{ $order->user->name }}</p>
        <p><strong>Status:</strong> {{ $order->status }}</p>
        <p><strong>Alamat:</strong> {{ $order->shipping_address }}</p>

        <hr>

        <h5>Produk:</h5>

        <table class="table">
            <thead>
                <tr>
                    <th>Produk</th>
                    <th>Harga</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($order->orderItems as $item)
                    <tr>
                        <td>{{ $item->product->name }}</td>
                        <td>Rp {{ number_format($item->price, 0, ',', '.') }}</td>
                        <td>{{ $item->quantity }}</td>
                        <td>
                            Rp {{ number_format($item->price * $item->quantity, 0, ',', '.') }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <h4>Total: Rp {{ number_format($order->total, 0, ',', '.') }}</h4>

    </div>

@endsection
