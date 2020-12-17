<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TunesController extends Controller
{
  public function tunes(){
    return view('welcome');
  }
}
