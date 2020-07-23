<?php

use Illuminate\Support\Facades\DB;

function jobIsQueued()
{
    return DB::table('jobs')->first();
}
