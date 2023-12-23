<?php

namespace App\Services\App;

use App\Models\App as AppModel;
use Illuminate\Support\Facades\DB;

class DeleteAppService
{
    public function delete(string $app_code)
    {
        $app = AppModel::findByCode($app_code);

        DB::dropIfExists($app->code);

        $app->delete();
    }
}
