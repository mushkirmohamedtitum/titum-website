<?php

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\StateTypes;
use Carbon\Carbon;

if (!function_exists('getCurrentUserId')) {
    function getCurrentUserId()
    {
        return auth()->user()->id;
    }
}

if (!function_exists('getCurrentDateTime')) {
    function getCurrentDateTime()
    {
        return Carbon::now();
    }
}

if (!function_exists('changeStatus')) {
    function changeStatus($record)
    {

        $status = null;

        if ($record[CommonColumns::IS_ACTIVE] == StateTypes::ACTIVE) {

            $status = StateTypes::IN_ACTIVE;
        } else if ($record[CommonColumns::IS_ACTIVE] == StateTypes::IN_ACTIVE) {

            $status = StateTypes::ACTIVE;
        }

        return $status;
    }
}
