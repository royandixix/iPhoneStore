<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\CartController;
use App\Http\Controllers\User\AuthController as UserAuth;
use App\Http\Controllers\Admin\ReportController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\StatsController;
use App\Http\Controllers\Admin\SettingController;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/login', [AdminAuthController::class, 'showLoginForm'])->name('login');
        Route::post('/login', [AdminAuthController::class, 'login'])->name('login.post');
        Route::get('/register', [AdminAuthController::class, 'showRegisterForm'])->name('register');
        Route::post('/register', [AdminAuthController::class, 'register'])->name('register.post');
    });
    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('home');
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');
        Route::get('/profile', fn() => view('admin.profile.index'))->name('profile.index');
        Route::prefix('customers')->name('customers.')->group(function () {
            Route::get('/', [CustomerController::class, 'index'])->name('index');
            Route::get('/create', [CustomerController::class, 'create'])->name('create');
            Route::post('/', [CustomerController::class, 'store'])->name('store');
            Route::get('/{id}', [CustomerController::class, 'show'])->name('show');
            Route::get('/{id}/edit', [CustomerController::class, 'edit'])->name('edit');
            Route::put('/{id}', [CustomerController::class, 'update'])->name('update');
            Route::delete('/{id}', [CustomerController::class, 'destroy'])->name('destroy');
        });
        Route::prefix('laporan')->group(function () {
            Route::get('/produk/review', [ReportController::class, 'productReview'])->name('laporan.produk.review');
            Route::get('/produk/pdf', [ReportController::class, 'productPdf'])->name('laporan.produk.pdf');
        });
        Route::get('/products/stats', [StatsController::class, 'productStats'])->name('products.stats');
        Route::get('/products/top', [StatsController::class, 'topProducts'])->name('products.top');
        Route::get('/products/sales-data', [StatsController::class, 'salesData'])->name('products.salesData');
        Route::prefix('products')->name('products.')->group(function () {
            Route::prefix('handphone')->name('handphone.')->group(function () {
                Route::get('/', [ProductController::class, 'index'])->name('index');
                Route::get('/create', [ProductController::class, 'create'])->name('create');
                Route::post('/', [ProductController::class, 'store'])->name('store');
                Route::get('/{product}/edit', [ProductController::class, 'edit'])->name('edit');
                Route::put('/{product}', [ProductController::class, 'update'])->name('update');
                Route::delete('/{product}', [ProductController::class, 'destroy'])->name('destroy');
            });
            Route::prefix('accessories')->name('accessories.')->group(function () {
                Route::get('/', [ProductController::class, 'accessoriesIndex'])->name('index');
                Route::get('/create', [ProductController::class, 'create'])->name('create');
                Route::post('/', [ProductController::class, 'store'])->name('store');
                Route::get('/{product}/edit', [ProductController::class, 'edit'])->name('edit');
                Route::put('/{product}', [ProductController::class, 'update'])->name('update');
                Route::delete('/{product}', [ProductController::class, 'destroy'])->name('destroy');
            });
        });

        Route::prefix('settings')->name('settings.')->group(function () {
            Route::get('/', fn() => view('admin.settings.index'))->name('index');
            Route::get('/profile', fn() => view('admin.settings.profile'))->name('profile');
            Route::get('/store', fn() => view('admin.settings.store'))->name('store');
            Route::get('/security', fn() => view('admin.settings.security'))->name('security');
            Route::get('/notifications', fn() => view('admin.settings.notifications'))->name('notifications');
            Route::get('/appearance', fn() => view('admin.settings.appearance'))->name('appearance');
            Route::post('/profile', [SettingController::class, 'updateProfile'])->name('profile.update');
            Route::post('/store', [SettingController::class, 'updateStore'])->name('store.update');
            Route::post('/security', [SettingController::class, 'updatePassword'])->name('security.update');
            Route::post('/notifications', [SettingController::class, 'updateNotifications'])->name('notifications.update');
            Route::post('/appearance', [SettingController::class, 'updateAppearance'])
                ->name('appearance.update');
        });
    });
});
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/shop', [HomeController::class, 'shop'])->name('shop');
Route::get('/shop/{id}', [HomeController::class, 'showProduct']);
Route::get('/products', [HomeController::class, 'products']);
Route::get('/products/{id}', [HomeController::class, 'productDetail']);
Route::get('/login', fn() => Inertia::render('User/Auth/Login'))->name('login');
Route::get('/register', fn() => Inertia::render('User/Auth/Register'))->name('register');
Route::post('/login', [UserAuth::class, 'login']);
Route::post('/register', [UserAuth::class, 'register']);
Route::post('/logout', [UserAuth::class, 'logout']);
Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart/add', [CartController::class, 'add']);
Route::post('/cart/remove', [CartController::class, 'remove']);
Route::post('/cart/update', [CartController::class, 'update']);
Route::get('/orders', fn() => redirect('/login'));
Route::get('/auth/google', fn() => Socialite::driver('google')->redirect());
Route::get('/auth/google/callback', function () {
    try {
        $googleUser = Socialite::driver('google')->stateless()->user();
        $user = \App\Models\User::firstOrCreate(
            ['email' => $googleUser->getEmail()],
            ['name' => $googleUser->getName() ?? 'Google User', 'password' => bcrypt(uniqid())]
        );
        Auth::login($user);
        return redirect()->route('home');
    } catch (\Exception $e) {
        return redirect('/login');
    }
});
