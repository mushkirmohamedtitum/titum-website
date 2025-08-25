<?php

use App\Http\Controllers\Guest\ServiceController as GuestServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Guest User routes
Route::inertia('/', 'TheHomePage');
Route::get('/{slug}', [GuestServiceController::class, 'show']);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
