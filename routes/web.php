<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => redirect('/slides/intro'))->name('home');

Route::prefix('slides')->group(function () {
    Route::get('intro', fn () => Inertia::render('slide/intro'));
    Route::get('title', fn () => Inertia::render('slide/title'));
    Route::get('profile', fn () => Inertia::render('slide/profile'));
    Route::get('nightwatch', fn () => Inertia::render('slide/nightwatch'));
    Route::get('phpxtky', fn () => Inertia::render('slide/phpxtky'));
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
