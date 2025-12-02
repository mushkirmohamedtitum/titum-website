<?php

namespace App\Enums\ModelColumns;

enum CommonColumns: string
{
    const IS_ACTIVE = 'is_active';
    const CREATED_BY = 'created_by';
    const UPDATED_BY = 'updated_by';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
    const ID = 'id';
    const SLUG = 'slug';
}
