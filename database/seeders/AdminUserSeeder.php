<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::whereEmail('mushkirmohamed@gmail.com')->first()) {
            User::create([
                'name' => 'Mohamed Mushkir',
                'email' => 'mushkirmohamed@gmail.com',
                'password' => Hash::make("Password")
            ]);
        }
    }
}
