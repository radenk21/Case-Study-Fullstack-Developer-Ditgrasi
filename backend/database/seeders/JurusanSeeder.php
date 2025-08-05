<?php

namespace Database\Seeders;

use App\Models\Fakultas;
use App\Models\Jurusan;
use App\Models\Strata;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JurusanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mapping = [
            'Fakultas Teknik' => ['Teknik Sipil','Teknik Mesin','Teknik Elektro','Teknik Industri','Teknik Kimia','Teknik Lingkungan','Arsitektur'],
            'Fakultas Ekonomi dan Bisnis' => ['Akuntansi','Manajemen','Ekonomi Pembangunan','Kewirausahaan','Kesekretariatan','Keuangan'],
            'Fakultas Ilmu Komputer dan Teknologi Informasi' => ['Ilmu Komputer','Teknologi Informasi','Teknik Informatika','Sains Data dan Kecerdasan Buatan'],
            'Fakultas Ilmu Sosial dan Ilmu Politik' => ['Ilmu Komunikasi','Sosiologi','Ilmu Politik','Ilmu Administrasi Negara','Ilmu Kesejahteraan Sosial','Antropologi Sosial','Perpajakan'],
            'Fakultas Pertanian' => ['Agroteknologi','Agribisnis','Peternakan','Teknologi Pangan','Manajemen Sumber Daya Perairan','Agroekoteknologi'],
            'Fakultas Matematika dan Ilmu Pengetahuan Alam' => ['Matematika','Fisika','Kimia','Biologi','Statistika','Metrologi dan Instrumentasi'],
            'Fakultas Kedokteran Gigi' => ['Kedokteran Gigi'],
            'Fakultas Farmasi' => ['Farmasi','Analis Farmasi dan Makanan','Gizi'],
            'Fakultas Kesehatan Masyarakat' => ['Kesehatan Masyarakat'],
            'Fakultas Ilmu Budaya' => ['Sastra Indonesia','Sastra Inggris','Sastra Jepang','Sastra Melayu','Ilmu Sejarah','Etnomusikologi','Sastra Arab','Bahasa Mandarin','Perpustakaan dan Sains Informasi'],
            'Fakultas Psikologi' => ['Psikologi'],
            'Fakultas Keperawatan' => ['Keperawatan'],
        ];
        foreach ($mapping as $fak => $jurusans) {
            $id_fak = Fakultas::select('id')->where('nama_fakultas',$fak)->value('id');
            $id_strata_sarjana = Strata::select('id')->where('nama_strata','Sarjana')->value('id');
            foreach ($jurusans as $j) {
                Jurusan::create([
                    'nama_jurusan'=>$j,
                    'id_strata'=>$id_strata_sarjana,
                    'id_fakultas'=>$id_fak
                ]);
            }
        }
    }
}
