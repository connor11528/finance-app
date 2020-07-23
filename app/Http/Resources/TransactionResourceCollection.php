<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TransactionResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->groupBy(function (TransactionResource $transaction) {
            return $transaction->date->toDateString();
        })->map(function ($transactions) {
            return [
                'transactions' => $transactions,
                'balance' => $transactions->sum('amount'),
            ];
        });
    }
}
