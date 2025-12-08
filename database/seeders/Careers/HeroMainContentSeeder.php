<?php

namespace Database\Seeders\Careers;

use App\Enums\ModelColumns\Careers\HeroMainContentColumns as CareersHeroMainContentColumns;
use App\Enums\ModelColumns\CommonColumns;
use App\Enums\StateTypes;
use App\Models\Careers\CareersHeroMainContent;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HeroMainContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contents = [
            [
                CareersHeroMainContentColumns::HERO_MAIN_CONTENT => 'Titum is here to make it easier and more efficient for you to grow your business with trusted solutions and support.',
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_AT => Carbon::now(),
                CommonColumns::UPDATED_AT => Carbon::now(),
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1
            ]
        ];

        foreach ($contents as $content) {
            CareersHeroMainContent::create($content);
        }
    }
}
