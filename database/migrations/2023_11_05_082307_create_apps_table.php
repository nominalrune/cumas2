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
        Schema::create('apps', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('created_by')->nullable()->constrained('users')->onUpdate('restrict')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()->constrained('users')->onUpdate('restrict')->onDelete('set null');
            $table->string('code', 255)->unique();
            $table->string('name', 255);
            $table->string('icon', 255)->default('1');
            $table->text('description');
            $table->json('form');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apps');
    }
};
