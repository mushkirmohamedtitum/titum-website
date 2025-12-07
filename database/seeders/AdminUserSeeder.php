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
        if (!User::where('email', 'mushkirmohamed@gmail.com')->exists()) {
            User::create([
                'name' => 'Mohamed Mushkir',
                'email' => 'mushkirmohamed@gmail.com',
                'password' => Hash::make("Password"),
                'role_code' => 2001,
                'is_active' => 1,
                // 'created_by' => null,
                // 'updated_by' => null
            ]);
        }
    }
}
