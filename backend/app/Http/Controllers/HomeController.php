<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // Page d'accueil
    public function index()
    {
        return view('home');
    }
}
