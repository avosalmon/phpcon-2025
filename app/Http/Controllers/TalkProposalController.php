<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreTalkProposalRequest;
use App\Models\TalkProposal;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class TalkProposalController extends Controller
{
    public function index(): Response
    {
        $proposals = TalkProposal::all();

        return Inertia::render('slide/talk-proposal/index', [
            'proposals' => $proposals,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('slide/talk-proposal/create');
    }

    public function store(StoreTalkProposalRequest $request): RedirectResponse
    {
        TalkProposal::create($request->validated());

        return redirect()->to('/slide/talk-proposals');
    }

    public function destroy(TalkProposal $talkProposal): RedirectResponse
    {
        $talkProposal->delete();

        return redirect()->to('/slide/talk-proposals');
    }
}
