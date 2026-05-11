<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminAuthController extends Controller
{
    public function showLoginForm()
    {
        return view('admin.auth.login');
    }

    public function showRegisterForm()
    {
        return view('admin.auth.register');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            if (Auth::user()->role !== 'admin') {
                Auth::logout();
                return back()->with('error', 'Akses ditolak');
            }

            return redirect()->route('admin.dashboard')->with('success', 'Login berhasil');
        }

        return back()->with('error', 'Email atau password salah');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:4',
            'phone' => 'required|min:10',
            'address' => 'required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'admin',
            'phone' => $request->phone,
            'address' => $request->address
        ]);

        Auth::login($user);

        return redirect()->route('admin.dashboard')->with('success', 'Register berhasil');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('admin.login')->with('success', 'Logout berhasil');
    }
}