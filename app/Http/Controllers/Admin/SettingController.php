<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    public function updateProfile(Request $request)
    {
        $user = auth()->user();

        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('users', 'public');
            $user->photo = $path;
        }

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
        ]);

        return back()->with('success', 'Profile updated successfully');
    }
    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6|confirmed',
        ]);

        $user = auth()->user();

        // cek password lama
        if (!Hash::check($request->current_password, $user->password)) {
            return back()->with('error', 'Current password is incorrect');
        }

        // update password
        $user->update([
            'password' => Hash::make($request->new_password),
        ]);

        return back()->with('success', 'Password updated successfully');
    }
    public function updateStore(Request $request)
    {
        $request->validate([
            'store_name' => 'required',
            'email' => 'nullable|email',
        ]);
        return back()->with('success', 'Store settings updated successfully');
    }
    public function updateNotifications(Request $request)
    {
        // nanti bisa disimpan ke database
        return back()->with('success', 'Notification settings updated successfully');
    }
    public function updateAppearance(Request $request)
    {
        // nanti bisa simpan ke database
        return back()->with('success', 'Appearance updated successfully');
    }
}
