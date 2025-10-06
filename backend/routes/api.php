<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/status', function (Request $request) {
 	return response()->json([
 	    'message' => 'API Laravel conectada com sucesso! (Vite/TS)',
 	    'status' => 200,
 	    'db_connection' => config('database.default')
 	]);
});