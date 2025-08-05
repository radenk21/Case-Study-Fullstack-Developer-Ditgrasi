<?php

namespace Database\Seeders;

use App\Models\Strata;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StrataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Strata::insert([
            ['nama_strata' => 'Diploma'],
            ['nama_strata' => 'Sarjana'],
            ['nama_strata' => 'Magister'],
            ['nama_strata' => 'Spesialis'],
            ['nama_strata' => 'Profesi'],
            ['nama_strata' => 'Doktoral'],
            ['nama_strata' => 'Summer Course'],
        ]);
    }
}
