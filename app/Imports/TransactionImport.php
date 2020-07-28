<?php

namespace App\Imports;

use App\Transaction;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Carbon;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Events\BeforeImport;
use Maatwebsite\Excel\Excel;

class TransactionImport implements
    ShouldQueue,
    ToModel,
    WithChunkReading,
    WithEvents,
    WithHeadingRow
{
    use Importable, RegistersEventListeners;

    /** @var string */
    public $readerType = Excel::CSV;

    /** @var int */
    public $totalRows = 0;

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
            'date' => Carbon::parse($row['date']),
        ]);
    }

    public function chunkSize(): int
    {
        return 1000;
    }

    public static function beforeImport(BeforeImport $event): void
    {
        $event->getConcernable()->totalRows = array_sum(
            $event->getReader()->getTotalRows()
        );
    }
}
