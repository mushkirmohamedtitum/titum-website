<?php

namespace Database\Seeders\Careers;

use App\Enums\ModelColumns\Careers\HeroSecondaryContentColEnum;
use App\Enums\ModelColumns\CommonColumns;
use App\Enums\StateTypes;
use App\Models\Careers\HeroSecondaryContent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HeroSecondaryContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $records = [
            [
                HeroSecondaryContentColEnum::CONTENT => 'Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.',
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_AT => getCurrentDateTime(),
                CommonColumns::UPDATED_AT => getCurrentDateTime(),
                CommonColumns::CREATED_BY => 1,
                CommonColumns::UPDATED_BY => 1
            ]
        ];

        foreach ($records as $record) {
            HeroSecondaryContent::create($record);
        }
    }
}
