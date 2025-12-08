<?php

namespace Database\Seeders;

use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\LevelOneNavigationColumns;
use App\Models\Navigation\LevelOneNavigation;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LevelOneNavigationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $levelOneNavigations = [
            // Careers sub menu
            [
                LevelOneNavigationColumns::LABEL => 'Hero Main Content',
                LevelOneNavigationColumns::PATH => '/careers/hero-main',
                LevelOneNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 1,
                LevelOneNavigationColumns::MAIN_NAVIGATION_ID => 7, // Careers
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                LevelOneNavigationColumns::LABEL => 'Hero Secondary Content',
                LevelOneNavigationColumns::PATH => '/careers/hero-secondary',
                LevelOneNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 2,
                LevelOneNavigationColumns::MAIN_NAVIGATION_ID => 7,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                LevelOneNavigationColumns::LABEL => 'Openings Section Heading',
                LevelOneNavigationColumns::PATH => '/careers/opening-section-heading',
                LevelOneNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 3,
                LevelOneNavigationColumns::MAIN_NAVIGATION_ID => 7,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],

            [
                LevelOneNavigationColumns::LABEL => 'Openings',
                LevelOneNavigationColumns::PATH => '/careers/openings',
                LevelOneNavigationColumns::ICONS => 'User',
                CommonColumns::ORDER => 4,
                LevelOneNavigationColumns::MAIN_NAVIGATION_ID => 7,
                CommonColumns::IS_ACTIVE => 1,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now()
            ],
            // End of Careers sub menu

        ];

        foreach ($levelOneNavigations as $data) {
            LevelOneNavigation::create($data);
        }
    }
}
