<?php

namespace Database\Seeders;

use App\Models\Fakultas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FakultasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $fakultas = [
            'Fakultas Teknik',
            'Fakultas Ekonomi dan Bisnis',
            'Fakultas Ilmu Komputer dan Teknologi Informasi',
            'Fakultas Hukum',
            'Fakultas Pertanian',
            'Fakultas Matematika dan Ilmu Pengetahuan Alam',
            'Fakultas Ilmu Sosial dan Ilmu Politik',
            'Fakultas Kedokteran Gigi',
            'Fakultas Farmasi',
            'Fakultas Kesehatan Masyarakat',
            'Fakultas Ilmu Budaya',
            'Fakultas Psikologi',
            'Fakultas Keperawatan',
        ];
        foreach ($fakultas as $nama) {
            Fakultas::create(['nama_fakultas'=>$nama]);
        }
    }
}
