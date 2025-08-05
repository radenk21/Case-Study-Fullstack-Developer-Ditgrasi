<?php

namespace Database\Seeders;

use App\Models\DaftarAkreditasi;
use App\Models\JenisAkreditasi;
use App\Models\Jurusan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DaftarAkreditasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (Jurusan::all() as $jur) {
            DaftarAkreditasi::create([
                'id_jurusan' => $jur->id,
                'id_jenis_akreditasi' => JenisAkreditasi::all()->random()->id,
                'tahun_perolehan' => rand(2023, 2025),
                'url_sertifikat' => 'serti-1.png',
            ]);
        }
    }
}
