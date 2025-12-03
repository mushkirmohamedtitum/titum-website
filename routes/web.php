<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Guest\HomeController;
use App\Http\Controllers\Guest\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');


// Guest User routes
// Route::inertia('/', 'TheHomePage');
// Route::get('/guest/{slug}', [ServiceController::class, 'show']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

Route::get('/{slug}', [ServiceController::class, 'show']);
