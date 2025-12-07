<?php

namespace Database\Seeders;

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\MainNavigationColumns;
use App\Enums\StateTypes;
use App\Models\MainNavigation;
use App\Models\Navigation\MainNavigation as NavigationMainNavigation;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MainNavigationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mainNavigations = [
            [
                MainNavigationColumns::LABEL => 'Dashboard',
                MainNavigationColumns::PATH => '/dashboard',
                MainNavigationColumns::ICONS => 'Dashboard',
                CommonColumns::ORDER => 1,
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                MainNavigationColumns::LABEL => 'User',
                MainNavigationColumns::PATH => '/user',
                MainNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 2,
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                MainNavigationColumns::LABEL => 'User Role',
                MainNavigationColumns::PATH => '/user-role',
                MainNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 3,
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                MainNavigationColumns::LABEL => 'Clients',
                MainNavigationColumns::PATH => '/clients',
                MainNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 4,
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                MainNavigationColumns::LABEL => 'Services',
                MainNavigationColumns::PATH => '/services',
                MainNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 5,
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                MainNavigationColumns::LABEL => 'Pricing',
                MainNavigationColumns::PATH => '/pricing',
                MainNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 6,
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],


        ];

        foreach ($mainNavigations as $nav) {
            NavigationMainNavigation::create($nav);
        }
    }
}
