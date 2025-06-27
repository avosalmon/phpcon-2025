<?php

declare(strict_types=1);

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SpeakerController;
use App\Http\Controllers\TalkProposalController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => redirect('/slides/intro'))->name('home');

Route::prefix('slides')->group(function () {
    Route::get('intro', fn () => Inertia::render('slide/intro'));
    Route::get('title', fn () => Inertia::render('slide/title'));
    Route::get('profile', fn () => Inertia::render('slide/profile'));
    Route::get('nightwatch', fn () => Inertia::render('slide/nightwatch'));
    Route::get('phpxtky', fn () => Inertia::render('slide/phpxtky'));
    Route::get('agenda', fn () => Inertia::render('slide/agenda'));
    Route::get('inertia', fn () => Inertia::render('slide/inertia'));
    Route::get('inertia-tagline', fn () => Inertia::render('slide/inertia-tagline'));
    Route::get('speakers', [SpeakerController::class, 'index']);
    Route::get('dashboard', DashboardController::class);
    Route::get('closing', fn () => Inertia::render('slide/closing'));

    Route::prefix('talk-proposals')->group(function () {
        Route::get('/', [TalkProposalController::class, 'index']);
        Route::post('/', [TalkProposalController::class, 'store'])->middleware(HandlePrecognitiveRequests::class);
        Route::get('/create', [TalkProposalController::class, 'create']);
        Route::delete('/{proposal}', [TalkProposalController::class, 'destroy']);
    });
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
