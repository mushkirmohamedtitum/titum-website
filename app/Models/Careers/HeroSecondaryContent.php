<?php

namespace App\Models\Careers;

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\StateTypes;
use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSecondaryContent extends Model
{
    /** @use HasFactory<\Database\Factories\Careers\HeroSecondaryContentFactory> */
    use HasFactory, HasUuids;

    protected $guarded = [];

    public function scopeActive($query)
    {
        return $query->where(CommonColumns::IS_ACTIVE, StateTypes::ACTIVE);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, CommonColumns::CREATED_BY, CommonColumns::ID);
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, CommonColumns::UPDATED_BY, CommonColumns::ID);
    }
}
