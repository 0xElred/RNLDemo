<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\GenderController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->prefix('/auth')->group(function () {
    Route::post('/login', 'login');
});


Route::middleware('auth:sanctum')->group(function() {
    Route::controller(AuthController::class)->prefix('/auth')->group(function(){
        Route::get('/me', 'me');
        Route::post('/logout', 'logout');
    });

    Route::controller(GenderController::class)->prefix('/gender')->group(function() {
        Route::get('/loadGenders', 'loadGenders');
        Route::get('/getGender/{genderId}', 'getGender');
        Route::post('/storeGender', 'storeGender');
        Route::put('/updateGender/{gender}', 'updateGender');
        Route::put('/destroyGender/{gender}', 'destroyGender');
    });
    
    Route::prefix('/user')->group(function () {
        Route::get('/loadUsers', [UserController::class, 'loadUsers']);
        Route::post('/storeUser', [UserController::class, 'storeUser']);
        Route::put('/updateUser/{user}', [UserController::class, 'updateUser']);
        Route::put('/destroyUser/{user}', [UserController::class, 'destroyUser']);
    });
    
});


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
