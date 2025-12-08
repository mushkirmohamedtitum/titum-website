<?php

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelsList;
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
        Schema::create('careers_hero_main_contents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('hero_main_content', 255);
            $table->tinyInteger('is_active')->default(1);
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('updated_by');
            $table->timestamps();

            $table->foreign(CommonColumns::CREATED_BY)
                ->references(CommonColumns::ID)
                ->on(ModelsList::USER)
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreign(CommonColumns::UPDATED_BY)
                ->references(CommonColumns::ID)
                ->on(ModelsList::USER)
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('careers_hero_main_contents');
    }
};
