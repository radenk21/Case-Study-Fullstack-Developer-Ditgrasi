<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DaftarAkreditasi;
use Illuminate\Http\Request;

class AkreditasiController extends Controller
{
    public function index(Request $request)
    {
        $query = DaftarAkreditasi::with([
            'jurusan.fakultas',
            'jurusan.strata',
            'jenisAkreditasi'
        ]);

        // Live Search by nama_jurusan
        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                // tabel: daftar_akreditasi
                $q->where('tahun_perolehan', 'like', "%{$search}%")
                  ->orWhere('url_sertifikat', 'like', "%{$search}%");

                // dari relasi: jurusan
                $q->orWhereHas('jurusan', function ($q2) use ($search) {
                    $q2->where('nama_jurusan', 'like', "%{$search}%")
                        ->orWhereHas('fakultas', function ($q3) use ($search) {
                            $q3->where('nama_fakultas', 'like', "%{$search}%");
                        })
                        ->orWhereHas('strata', function ($q4) use ($search) {
                            $q4->where('nama_strata', 'like', "%{$search}%");
                        });
                });

                // dari relasi: jenis_akreditasi
                $q->orWhereHas('jenisAkreditasi', function ($q5) use ($search) {
                    $q5->where('nama_akreditasi', 'like', "%{$search}%")
                       ->orWhere('tingkat_akreditasi', 'like', "%{$search}%");
                });
            });
        }

        if ($request->filled('strataFilter')) {
            $strata = $request->input('strataFilter');
            $query->whereHas('jurusan.strata', function ($q) use ($strata) {
                $q->whereIn('nama_strata', $strata);
            });
        }

        if ($request->filled('selectedStrata')) {
            $strata = $request->input('selectedStrata');
            $query->whereHas('jurusan.strata', function ($q) use ($strata) {
                $q->whereIn('nama_strata', $strata);
            });
        }

        if ($request->filled('selectedFakultas')) {
            $fakultas = $request->input('selectedFakultas');
            $query->whereHas('jurusan.fakultas', function ($q) use ($fakultas) {
                $q->whereIn('nama_fakultas', $fakultas);
            });
        }

        // Pagination
        $pagination = $request->input('pagination', 5);
        $result = $query->paginate($pagination);
        return response()->json($result);
    }
}
