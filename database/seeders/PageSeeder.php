<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            [
                'title' => "Services",
                'slug' => 'services',
                'label' => 'Our Services'
            ],
            [
                'title' => 'Clients',
                'slug' => 'clients',
                'label' => 'Clients'
            ],
            [
                'title' => 'About Us',
                'slug' => 'about-us',
                'label' => 'About Us'
            ],
            [
                'title' => 'Contact Us',
                'slug' => 'contact-us',
                'label' => 'Contact Us'
            ]
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
