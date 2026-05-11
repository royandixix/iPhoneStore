<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function index()
    {
        return view('admin.profile.index');
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        // ✅ HANDLE UPLOAD FOTO
        if ($request->hasFile('photo')) {

            // hapus foto lama
            if ($user->photo) {
                Storage::disk('public')->delete($user->photo);
            }

            // simpan foto baru
            $path = $request->file('photo')->store('profile', 'public');
            $data['photo'] = $path;
        }

        $user->update($data);

        return redirect()->route('admin.profile.index')
            ->with('success', 'Profil berhasil diupdate');
    }

    public function password(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|min:6|confirmed'
        ]);

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return redirect()->route('admin.profile.index')
                ->with('error', 'Password lama salah');
        }

        $user->update([
            'password' => Hash::make($request->password)
        ]);

        return redirect()->route('admin.profile.index')
            ->with('success', 'Password berhasil diupdate');
    }

    public function delete(Request $request)
    {
        $request->validate([
            'password' => 'required'
        ]);

        $user = Auth::user();

        if (!Hash::check($request->password, $user->password)) {
            return redirect()->route('admin.profile.index')
                ->with('error', 'Password salah');
        }

        Auth::logout();
        $user->delete();

        return redirect('/admin/login')
            ->with('success', 'Akun berhasil dihapus');
    }
}
