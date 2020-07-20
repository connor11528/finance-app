<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

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
     * Prepare a date for array / JSON serialization.
     *
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    /**
     * Set the formatted transaction amount.
     *
     * @return void
     */
    public function setAmountAttribute($value)
    {
        $formatted_value = round($value * 100);
        $this->attributes['amount'] = $formatted_value;
    }

    /**
     * Get the formatted transaction amount.
     *
     * @return void
     */
    public function getAmountAttribute($value)
    {
        return number_format(($value / 100), 2, '.', '');
    }
}
