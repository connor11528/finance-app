<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['date'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'label', 'date', 'amount'
    ];

    /**
     * Set the formatted transaction date.
     *
     * @return void
     */
    public function setAmountAttribute($value)
    {
        $formatted_value = number_format($value, 2, '.', '');
        $this->attributes['amount'] = str_replace('.', '', $formatted_value);
    }

    /**
     * Get the formatted transaction date.
     *
     * @return void
     */
    public function getAmountAttribute($value)
    {
        return number_format(($value / 100), 2, '.', '');
    }
}
