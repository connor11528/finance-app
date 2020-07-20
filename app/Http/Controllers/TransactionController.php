<?php

namespace App\Http\Controllers;

use App\Transaction;
use App\Http\Requests\TransactionRequest;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $groups_data = Transaction::orderByDesc('date')->paginate(100);

        $grouped_by_date = $groups_data
            ->groupBy(function ($item) {
                return $item->date->format('Y-m-d');
            })
            ->map(function ($transactions) {
                return [
                    'transactions' => $transactions,
                    'balance' => $transactions->sum('amount')
                ];
            });

        $groups = $groups_data->setCollection($grouped_by_date);

        return response()->json($groups);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TransactionRequest $request)
    {
        $transaction = Transaction::create($request->all());

        return $this->show($transaction);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        return response()->json($transaction);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(TransactionRequest $request, Transaction $transaction)
    {
        $transaction->update($request->all());

        return $this->show($transaction->fresh());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        $transaction->delete();

        return $this->show($transaction);
    }
}
