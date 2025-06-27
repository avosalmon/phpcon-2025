<?php

declare(strict_types=1);

use App\Models\TalkProposal;
use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\get;
use function Pest\Laravel\post;

describe('index', function () {
    it('should return a list of talk proposals', function () {
        TalkProposal::factory()->count(2)->create();

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

describe('store', function () {
    it('should store a new talk proposal', function () {
        post('/slides/talk-proposals', [
            'name' => 'Taylor Otwell',
            'email' => 'taylor@laravel.com',
            'talk_title' => 'Introducing Laravel Cloud',
            'talk_description' => 'Laravel Cloud is a new way of deploying Laravel applications.',
            'category' => 'Laravel',
        ])
            ->assertRedirect('/slides/talk-proposals');

        assertDatabaseHas('talk_proposals', [
            'name' => 'Taylor Otwell',
            'email' => 'taylor@laravel.com',
            'talk_title' => 'Introducing Laravel Cloud',
            'talk_description' => 'Laravel Cloud is a new way of deploying Laravel applications.',
            'category' => 'Laravel',
        ]);
    });
});
