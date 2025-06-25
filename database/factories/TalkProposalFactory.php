<?php

namespace Database\Factories;

use App\TalkProposalStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TalkProposal>
 */
class TalkProposalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'talk_title' => $this->faker->sentence,
            'talk_description' => $this->faker->paragraph,
            'status' => $this->faker->randomElement(TalkProposalStatus::cases()),
        ];
    }
}
