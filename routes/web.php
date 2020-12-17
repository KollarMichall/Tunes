<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TunesControler;
use App\Http\Controllers\TunesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::resource('items', 'ItemController');
Route::get('/tunes', [App\Http\Controllers\TunesController::class, 'tunes'])->name('tunes');
Route::get('/about', [App\Http\Controllers\AboutController::class, 'about'])->name('about');
