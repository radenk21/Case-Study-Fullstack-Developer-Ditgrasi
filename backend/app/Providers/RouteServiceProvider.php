<?php

use Illuminate\Support\Facades\Route;

class RouteServiceProvider
{
    protected $namespace = 'App\Http\Controllers';

    public function map()
    {

        $this->mapApiRoutes();
    }

    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('routes/api.php'));
    }
}