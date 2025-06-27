<?php

declare(strict_types=1);

use App\Models\TalkProposal;
use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\get;

describe('index', function () {
    it('should return a list of talk proposals', function () {
        $proposals = TalkProposal::factory()->count(2)->create();

        get('/slides/talk-proposals')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('slide/talk-proposal/index')
                ->has('proposals', 2)
            );
    });
});

describe('create', function () {
    it('should render the create page', function () {
        get('/slides/talk-proposals/create')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('slide/talk-proposal/create'));
    });
});
