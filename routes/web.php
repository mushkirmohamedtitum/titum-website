<?php

use App\Http\Controllers\Admin\Careers\HeroMainController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Guest\HomeController;
use App\Http\Controllers\Guest\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home'); // Guest

// Protected routes - Admin Panel
Route::middleware(['auth', 'verified'])->group(function () {

    Route::prefix('admin')->group(function () {

        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Careers Menu
        Route::prefix('careers')->group(function () {
            Route::resource('hero-main', HeroMainController::class);
        });
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

Route::get('/{slug}', [ServiceController::class, 'show']);
