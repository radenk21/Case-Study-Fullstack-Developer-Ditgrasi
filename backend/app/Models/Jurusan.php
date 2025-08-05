<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jurusan extends Model
{
    protected $table = 'jurusan';
    public function fakultas() {
        return $this->belongsTo(Fakultas::class, 'id_fakultas');
    }

    public function strata() {
        return $this->belongsTo(Strata::class, 'id_strata');
    }
}
