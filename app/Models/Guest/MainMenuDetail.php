<?php

namespace App\Models\Guest;

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\StateTypes;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainMenuDetail extends Model
{
    /** @use HasFactory<\Database\Factories\Guest\MainMenuDetailFactory> */
    use HasFactory;

    protected $guarded = [];

    protected $keyType = 'string';

    public function scopeActive(Builder $query)
    {
        return $query->where(CommonColumns::IS_ACTIVE, StateTypes::ACTIVE);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by', 'id');
    }
}
