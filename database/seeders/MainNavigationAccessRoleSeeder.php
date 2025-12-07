<?php

namespace Database\Seeders;

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\MainNavigationAccessRoleColumns;
use App\Models\Navigation\MainNavigationAccessRole;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MainNavigationAccessRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $accessDataset = [
            // Super Admin
            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 1,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2001,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 2,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2001,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 3,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2001,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 4,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2001,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 5,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2001,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 6,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2001,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 7,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2001,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            // Admin
            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 1,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2002,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            [
                MainNavigationAccessRoleColumns::MAIN_NAVIGATION_ID => 7,
                MainNavigationAccessRoleColumns::ROLE_CODE => 2002,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],
        ];

        foreach ($accessDataset as $data) {
            MainNavigationAccessRole::create($data);
        }
    }
}
