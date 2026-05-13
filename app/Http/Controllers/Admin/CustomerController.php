<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    // LIST
    public function index()
    {
        $customers = User::where('role', 'user')
            ->latest()
            ->paginate(10);

        return view('admin.customers.index', compact('customers'));
    }

    // DETAIL
    public function show($id)
    {
        $customer = User::with('orders')->findOrFail($id);

        return view('admin.customers.show', compact('customer'));
    }

    // FORM CREATE
    public function create()
    {
        return view('admin.customers.create');
    }

    // SIMPAN DATA BARU
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'     => 'required',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'phone'    => 'nullable',
            'address'  => 'nullable',
            'photo'    => 'nullable|image|max:2048',
        ]);

        // hash password
        $data['password'] = Hash::make($data['password']);

        // default role user
        $data['role'] = 'user';

        // upload photo
        if ($request->hasFile('photo')) {
            $data['photo'] = $request->file('photo')->store('customers', 'public');
        }

        User::create($data);

        return redirect()->route('admin.customers.index')
            ->with('success', 'Customer berhasil ditambahkan');
    }

    // FORM EDIT
    public function edit($id)
    {
        $customer = User::findOrFail($id);

        return view('admin.customers.edit', compact('customer'));
    }

    // UPDATE DATA
    public function update(Request $request, $id)
    {
        $customer = User::findOrFail($id);

        $data = $request->validate([
            'name'    => 'required',
            'email'   => 'required|email|unique:users,email,' . $id,
            'phone'   => 'nullable',
            'address' => 'nullable',
            'photo'   => 'nullable|image|max:2048',
        ]);

        // upload photo baru
        if ($request->hasFile('photo')) {
            $data['photo'] = $request->file('photo')->store('customers', 'public');
        }

        $customer->update($data);

        return redirect()->route('admin.customers.index')
            ->with('success', 'Customer berhasil diupdate');
    }

    // DELETE
    public function destroy($id)
    {
        $customer = User::findOrFail($id);

        // cegah hapus admin
        if ($customer->role === 'admin') {
            return back()->with('error', 'Tidak bisa hapus admin');
        }

        $customer->delete();

        return redirect()->route('admin.customers.index')
            ->with('success', 'Customer berhasil dihapus');
    }
}