<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImportRequest;
use App\Imports\TransactionImport;

class ImportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \App\Http\Requests\ImportRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(ImportRequest $request)
    {
        $import = new TransactionImport();

        $import->queue($request->file('import'));

        return response()->json([
            'rows' => $import->totalRows,
        ]);
    }
}
