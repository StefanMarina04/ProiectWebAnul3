<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Dacă ai rulat deja migrarea anterioară cu `image_url`, folosește ACEASTĂ
 * migrare pentru a redenumi coloana la `image_path`.
 *
 * Dacă NU ai rulat încă nicio migrare pentru products, folosește în schimb
 * fișierul create_products_table.php actualizat de mai jos și ignoră acesta.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            // Redenumește image_url → image_path
            $table->renameColumn('image_url', 'image_path');
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->renameColumn('image_path', 'image_url');
        });
    }
};
