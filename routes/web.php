<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use App\Models\Product;
use App\Models\Order;
use App\Models\User;
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\LaporanController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\CartController;
use App\Http\Controllers\User\AuthController as UserAuth;

/*
|--------------------------------------------------------------------------
| ADMIN
|--------------------------------------------------------------------------
*/
Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/login',[AdminAuthController::class,'showLoginForm'])->name('login');
        Route::post('/login',[AdminAuthController::class,'login'])->name('login.post');
        Route::get('/register',[AdminAuthController::class,'showRegisterForm'])->name('register');
        Route::post('/register',[AdminAuthController::class,'register'])->name('register.post');
    });

    Route::middleware(['auth','admin'])->group(function () {
        Route::get('/',fn()=>redirect()->route('admin.dashboard'));
        Route::get('/dashboard',fn()=>view('admin.dashboard.index'))->name('dashboard');
        Route::post('/logout',[AdminAuthController::class,'logout'])->name('logout');

        Route::prefix('products')->group(function () {
            Route::get('/',[ProductController::class,'index'])->name('products.index');
            Route::get('/create',[ProductController::class,'create'])->name('products.create');
            Route::post('/',[ProductController::class,'store'])->name('products.store');
            Route::get('/{product}/edit',[ProductController::class,'edit'])->name('products.edit');
            Route::put('/{product}',[ProductController::class,'update'])->name('products.update');
            Route::delete('/{product}',[ProductController::class,'destroy'])->name('products.destroy');
            Route::get('/stats',[ProductController::class,'stats'])->name('products.stats');
            Route::get('/top',[ProductController::class,'top'])->name('products.top');
            Route::get('/sales-data',[ProductController::class,'salesData'])->name('products.salesData');
        });

        Route::prefix('laporan')->name('laporan.')->group(function () {
            Route::get('/',[LaporanController::class,'index'])->name('index');
            Route::get('/produk/review',[LaporanController::class,'produkReview'])->name('produk.review');
            Route::get('/produk/pdf',[LaporanController::class,'produkPdf'])->name('produk.pdf');
            Route::get('/produk/excel',[LaporanController::class,'produkExcel'])->name('produk.excel');
        });

        Route::prefix('profile')->name('profile.')->group(function () {
            Route::get('/',[ProfileController::class,'index'])->name('index');
            Route::post('/update',[ProfileController::class,'update'])->name('update');
            Route::post('/password',[ProfileController::class,'password'])->name('password');
            Route::delete('/delete',[ProfileController::class,'delete'])->name('delete');
        });
    });
});

/*
|--------------------------------------------------------------------------
| USER
|--------------------------------------------------------------------------
*/
Route::get('/',[HomeController::class,'index'])->name('home');

/* 🔥 FIX: pakai controller biar auth kebaca stabil */
Route::get('/shop',[HomeController::class,'shop'])->name('shop');

/* 🔥 FIX: hapus duplikat, sisakan 1 */
Route::get('/shop/{id}', function ($id) {
    return Inertia::render('User/Shop/Show', [
        'product' => Product::findOrFail($id)
    ]);
})->name('shop.show');

/* PRODUCTS */
Route::get('/products',function(){
    return Inertia::render('User/Products/Index',[
        'products'=>Product::latest()->limit(10)->get()
    ]);
});

Route::get('/products/{id}',function($id){
    return Inertia::render('User/Products/Show',[
        'product'=>Product::findOrFail($id)
    ]);
});

/* CONTEN */
Route::prefix('conten6')->group(function () {
    Route::get('/material',function(){
        return Inertia::render('User/home/Features/MaterialDetail');
    })->name('conten6.material');

    Route::get('/performa',function(){
        return Inertia::render('User/home/Features/PerformaDetail');
    })->name('conten6.performa');
});

/*
|--------------------------------------------------------------------------
| AUTH USER
|--------------------------------------------------------------------------
*/
Route::get('/login',fn()=>Inertia::render('User/Auth/Login'))->name('login');
Route::get('/register',fn()=>Inertia::render('User/Auth/Register'))->name('register');

Route::post('/login',[UserAuth::class,'login']);
Route::post('/register',[UserAuth::class,'register']);
Route::post('/logout',[UserAuth::class,'logout'])->middleware('auth');

/*
|--------------------------------------------------------------------------
| PROTECTED
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    Route::post('/cart/add',[CartController::class,'add']);
    Route::get('/cart',[CartController::class,'index']);
    Route::get('/orders',function(){
        return Inertia::render('User/Orders/Index',[
            'orders'=>Order::with('orderItems.product')
                ->where('user_id',auth()->id())
                ->latest()
                ->get()
        ]);
    });
});

/*
|--------------------------------------------------------------------------
| GOOGLE LOGIN
|--------------------------------------------------------------------------
*/
Route::get('/auth/google',fn()=>Socialite::driver('google')->redirect());

Route::get('/auth/google/callback',function(){
    try{
        $googleUser=Socialite::driver('google')->stateless()->user();

        $user=User::firstOrCreate(
            ['email'=>$googleUser->getEmail()],
            [
                'name'=>$googleUser->getName()??'Google User',
                'password'=>bcrypt(uniqid()),
            ]
        );

        Auth::login($user);

        return redirect()->route('home');
    }catch(\Exception $e){
        return redirect('/login')->with('error','Login Google gagal');
    }
});