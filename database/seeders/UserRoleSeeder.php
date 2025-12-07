<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('user_roles')->insert([
            [
                'code' => 2001,
                'role_name' => 'Super Admin',
                'is_active' => 1,
                // 'created_by' => 1,
                // 'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 2002,
                'role_name' => 'Admin',
                'is_active' => 1,
                // 'created_by' => 1,
                // 'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
