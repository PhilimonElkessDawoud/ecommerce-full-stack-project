<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductInstanceResource;
use App\Models\ProductInstance;
use Illuminate\Http\Request;

class ProductInstanceController extends Controller
{
    public function getAllInstances()
    {
        return ProductInstanceResource::collection(ProductInstance::all());
    }

    public function getInstance(ProductInstance $instance)
    {
        return new ProductInstanceResource($instance);
    }
}
