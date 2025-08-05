<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Fakultas;
use App\Models\JenisAkreditasi;
use App\Models\Strata;
use Illuminate\Http\Request;

class MasterDataController extends Controller
{
    public function fakultas(Request $request)
    {
        $search = $request->input('searchFilterFakultas');
        $query = Fakultas::select('nama_fakultas')->orderBy('nama_fakultas');
        if ($search) {
            $query->where('nama_fakultas', 'like', "%{$search}%");
        }
        return response()->json($query->get());
    }

    public function strata()
    {
        return response()->json(Strata::select('nama_strata')->orderBy('nama_strata')->get());
    }

    public function jenisAkreditasi()
    {
        return response()->json(JenisAkreditasi::select('tingkat_akreditasi', 'nama_akreditasi')->get());
    }
}
