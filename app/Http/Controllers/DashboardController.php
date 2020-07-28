<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Support\Facades\Queue;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke()
    {
        $totalBalance = Transaction::sum('amount');

        return response()->json([
            'total_balance' => number_format($totalBalance / 100, 2, '.', ''),
            'import_status' => Queue::size() > 0,
        ]);
    }
}
