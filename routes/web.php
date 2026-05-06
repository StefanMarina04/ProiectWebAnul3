<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ShopController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/forum', function() 
{
    return Inertia::render('Forum');
});

Route::get('/gallery', function() 
{
    return Inertia::render('Gallery');
});

Route::get('/shop', function() 
{
    return Inertia::render('Shop');
});

Route::get('/shop',        [ShopController::class, 'index'])->name('shop.index');
Route::get('/shop/{product}', [ShopController::class, 'show'])->name('shop.show');

Route::get('/extra', function()
{
    return Inertia::render('Extra');
});

Route::get('/magazines', function()
{
    return Inertia::render('Magazines');
});

Route::get('/language/{locale}', function ($locale)
{
    if (in_array($locale, ['en', 'ro']))
        {
            session()->put('locale', $locale);
            session()->save();
        }

    return redirect()->back();
});

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::get('/', [AdminController::class, 'index'])->name('index');

    Route::post('/users',          [AdminController::class, 'storeUser'])->name('users.store');
    Route::put('/users/{user}',    [AdminController::class, 'updateUser'])->name('users.update');
    Route::delete('/users/{user}', [AdminController::class, 'destroyUser'])->name('users.destroy');

    Route::post('/products',             [AdminController::class, 'storeProduct'])->name('products.store');
    Route::put('/products/{product}',    [AdminController::class, 'updateProduct'])->name('products.update');
    Route::delete('/products/{product}', [AdminController::class, 'destroyProduct'])->name('products.destroy');
});

require __DIR__.'/auth.php';
