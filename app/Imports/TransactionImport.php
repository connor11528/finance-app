<?php

namespace App\Imports;

use App\Transaction;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class TransactionImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Transaction([
            'label' => $row['label'],
            'amount' => $row['value'],
            'date' => Carbon::parse($row['date'])->format('Y-m-d H:i:s')
        ]);
    }
}
