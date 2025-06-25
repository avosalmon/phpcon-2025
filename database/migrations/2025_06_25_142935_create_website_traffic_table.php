<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('website_traffic', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->integer('hour');
            $table->integer('visitors');
            $table->integer('page_views');
            $table->timestamps();

            $table->unique(['date', 'hour']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('website_traffic');
    }
};
