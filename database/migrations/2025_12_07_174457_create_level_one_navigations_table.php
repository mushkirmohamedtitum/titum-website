<?php

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\MainNavigationAccessRoleColumns;
use App\Enums\ModelColumns\MainNavigationColumns;
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
        Schema::create('level_one_navigations', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('path');
            $table->string('icons')->nullable();
            $table->tinyInteger('order');
            $table->unsignedBigInteger('main_navigation_id');
            $table->tinyInteger('is_active')->default(1);
            $table->timestamps();

            $table->foreign(MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID)
                ->references(CommonColumns::ID)
                ->on(ModelsList::MAIN_NAVIGATION)
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('level_one_navigations');
    }
};
