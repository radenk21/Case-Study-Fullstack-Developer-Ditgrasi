<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            StrataSeeder::class,
            JenisAkreditasiSeeder::class,
            FakultasSeeder::class,
            JurusanSeeder::class,
            DaftarAkreditasiSeeder::class,
        ]);
    }
}
