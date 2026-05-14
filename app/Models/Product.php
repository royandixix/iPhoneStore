<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'category',
        'category_id',
        'label',
        'image',
        'sold'
    ];

    public function categoryData()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    
}