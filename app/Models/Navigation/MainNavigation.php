<?php

namespace App\Models\Navigation;

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\StateTypes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainNavigation extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function scopeActive(Builder $query)
    {
        return $query->where(CommonColumns::IS_ACTIVE, StateTypes::ACTIVE);
    }


    public function mainNavigationAccessUserRole()
    {
        return $this->hasMany(MainNavigationAccessRole::class);
    }
}
