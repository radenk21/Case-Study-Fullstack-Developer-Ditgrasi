<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DaftarAkreditasi extends Model
{
    protected $table = 'daftar_akreditasi';

    public function jurusan() {
        return $this->belongsTo(Jurusan::class, 'id_jurusan');
    }

    public function jenisAkreditasi() {
        return $this->belongsTo(JenisAkreditasi::class, 'id_jenis_akreditasi');
    }
}
