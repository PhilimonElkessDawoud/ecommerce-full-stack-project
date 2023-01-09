<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductInstanceController;
use App\Http\Resources\ProductInstanceResource;
use App\Http\Resources\UserResource;
use App\Models\ProductInstance;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//AuthController
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);


//ProductInstanceController
Route::post('/getAllInstances', [ProductInstanceController::class, 'getAllInstances']);
Route::post('/getInstanceById/{id}', function ($id) {

    $inst = ProductInstance::find($id);

    if (!$inst) {
        return response()->json('Product Instance Not Found');
    }

    return new ProductInstanceResource($inst);
});

Route::post('/searchForInstance/{string}', function ($string) {

    $inst = ProductInstance::where('name', 'Like', "%$string%")->first();

    if (!$inst) {
        return response()->json('Product Instance Not Found');
    }

    return new ProductInstanceResource($inst);
});


Route::post('/getUser/{email}', function ($email) {

    $user = User::where('email', 'LIKE', "%$email%")->first();

    if (!$user) {
        return response()->json('User Not Found');
    }

    return new UserResource($user);
});
