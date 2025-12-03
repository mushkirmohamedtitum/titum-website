<?php

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
