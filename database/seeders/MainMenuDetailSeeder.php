<?php

namespace Database\Seeders;

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\MainMenuDetailColumns;
use App\Models\Guest\MainMenuDetail;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Symfony\Component\Uid\Uuid;

class MainMenuDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menus = [
            [
                // CommonColumns::ID => Uuid::v1(),
                MainMenuDetailColumns::MENU_LABEL => 'Home',
                CommonColumns::SLUG => '/',
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()

            ],

            [
                // CommonColumns::ID => Uuid::v1(),
                MainMenuDetailColumns::MENU_LABEL => 'Pricing',
                CommonColumns::SLUG => '/pricing',
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                // CommonColumns::ID => Uuid::v1(),
                MainMenuDetailColumns::MENU_LABEL => 'Clients',
                CommonColumns::SLUG => '/clients',
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                // CommonColumns::ID => Uuid::v1(),
                MainMenuDetailColumns::MENU_LABEL => 'Services',
                CommonColumns::SLUG => '/services',
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                // CommonColumns::ID => Uuid::v1(),
                MainMenuDetailColumns::MENU_LABEL => 'Careers',
                CommonColumns::SLUG => '/careers',
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                // CommonColumns::ID => Uuid::v1(),
                MainMenuDetailColumns::MENU_LABEL => 'About us',
                CommonColumns::SLUG => '/about-us',
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                // CommonColumns::ID => Uuid::v1(),
                MainMenuDetailColumns::MENU_LABEL => 'Contact us',
                CommonColumns::SLUG => '/contact-us',
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ]
        ];

        foreach ($menus as $menu) {
            MainMenuDetail::create($menu);
        }
    }
}
