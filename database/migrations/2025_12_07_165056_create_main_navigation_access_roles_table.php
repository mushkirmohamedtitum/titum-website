<?php

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\MainNavigationAccessRoleColumns;
use App\Enums\ModelsList;
use App\Models\Navigation\MainNavigation;
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
        Schema::create('main_navigation_access_roles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('main_navigation_id')->nullable();
            $table->bigInteger('role_code')->nullable();
            $table->tinyInteger('is_active')->default(1);
            $table->timestamps();

            $table->foreign(MainNavigationAccessRoleColumns::ROLE_CODE)->references(CommonColumns::CODE)->on(ModelsList::USER_ROLES);
            $table->foreign(MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID)->references(CommonColumns::ID)->on(ModelsList::MAIN_NAVIGATION);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('main_navigation_access_roles');
    }
};
