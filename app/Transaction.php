<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'label' => 'string',
        'date' => 'datetime',
        'amount' => 'integer',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'label', 'date', 'amount',
    ];

    /**
     * Set the formatted transaction amount.
     */
    public function setAmountAttribute(float $value): void
    {
        $this->attributes['amount'] = (int) round($value * 100);
    }

    /**
     * Get the formatted transaction amount.
     */
    public function getAmountAttribute(int $value): float
    {
        return round($value / 100, 2);
    }
}
