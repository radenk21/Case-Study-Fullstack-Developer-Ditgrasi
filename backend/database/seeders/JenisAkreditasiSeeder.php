<?php

namespace Database\Seeders;

use App\Models\JenisAkreditasi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JenisAkreditasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JenisAkreditasi::insert([
            ['tingkat_akreditasi'=>'Nasional','nama_akreditasi'=>'Unggul'],
            ['tingkat_akreditasi'=>'Nasional','nama_akreditasi'=>'Baik Sekali'],
            ['tingkat_akreditasi'=>'Nasional','nama_akreditasi'=>'Baik'],
        ]);
    }
}
