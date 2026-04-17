<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Folosește ACEST fișier dacă instalezi de la zero (nu ai rulat încă migrarea
 * anterioară cu image_url). Înlocuiește fișierul livrat anterior.
 *
 * Dacă ai rulat deja migrarea veche, folosește în schimb:
 *   rename_image_url_to_image_path_in_products.php
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->string('category', 100)->nullable();
            $table->enum('status', ['active', 'inactive', 'draft'])->default('active');
            $table->string('image_path')->nullable(); // calea relativă în storage/app/public/
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
