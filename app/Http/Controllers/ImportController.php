<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImportRequest;
use App\Imports\TransactionImport;
use App\Jobs\ImportTransactionsJob;
use Maatwebsite\Excel\Facades\Excel;

class ImportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ImportRequest $request)
    {
        $file = $request->file('import')
            ->move(storage_path() . '/app/imports')
            ->getRealPath();

        $rows = Excel::toArray(
            new TransactionImport,
            $file,
            null,
            \Maatwebsite\Excel\Excel::CSV
        );

        dispatch(
            new ImportTransactionsJob($file)
        );

        return response([
            'rows' => number_format(count($rows[0]), 0, false, ',')
        ]);
    }
}
