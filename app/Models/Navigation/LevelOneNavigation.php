<?php

namespace App\Models\Navigation;

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\MainNavigationAccessRoleColumns;
use App\Enums\StateTypes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LevelOneNavigation extends Model
{
    /** @use HasFactory<\Database\Factories\Navigation\LevelOneNavigationFactory> */
    use HasFactory;

    protected $guarded = [];

    public function scopeActive(Builder $query)
    {
        return $query->where(CommonColumns::IS_ACTIVE, StateTypes::ACTIVE);
    }

    public function mainNavigation()
    {
        return $this->belongsTo(MainNavigation::class, MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID, CommonColumns::ID);
    }
}
