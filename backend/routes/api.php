<?php

use App\Http\Controllers\Api\AkreditasiController;
use App\Http\Controllers\Api\MasterDataController;
use Illuminate\Support\Facades\Route;

Route::get('/akreditasi', [AkreditasiController::class, 'index']);
Route::get('/master/fakultas', [MasterDataController::class, 'fakultas']);
Route::get('/master/strata', [MasterDataController::class, 'strata']);
Route::get('/master/jenis-akreditasi', [MasterDataController::class, 'jenisAkreditasi']);