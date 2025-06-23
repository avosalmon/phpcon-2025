<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Speaker;
use Inertia\Inertia;
use Inertia\Response;

class SpeakerController extends Controller
{
    public function index(): Response
    {
        $speakers = Speaker::all();

        return Inertia::render('slide/speakers', [
            'speakers' => $speakers,
        ]);
    }
}
