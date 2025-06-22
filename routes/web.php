<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => redirect('/slides'))->name('home');

Route::prefix('slides')->group(function () {
    Route::get('/', fn () => Inertia::render('slide/intro', ['navigation' => [
        'currentSlide' => '/',
        'currentIndex' => 0,
        'totalSlides' => 3,
        'previousSlide' => null,
        'nextSlide' => 'title',
    ]]));
    Route::get('title', fn () => Inertia::render('slide/title', ['navigation' => [
        'currentSlide' => 'title',
        'currentIndex' => 1,
        'totalSlides' => 3,
        'previousSlide' => '/',
        'nextSlide' => 'profile',
    ]]));
    Route::get('profile', fn () => Inertia::render('slide/profile', ['navigation' => [
        'currentSlide' => 'profile',
        'currentIndex' => 2,
        'totalSlides' => 3,
        'previousSlide' => 'title',
        'nextSlide' => null,
    ]]));
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
