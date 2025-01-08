<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /*public function index()
    {
        if (Auth::check()) {
            if (Auth::user()->user_type === 'organizer') {
                return view('home.organizer');
            } elseif (Auth::user()->user_type === 'participator') {
                return view('home.participator');
            }
        }

        return view('home.guest');
    }*/

    public function index()
{
    if (Auth::check()) {
        if (Auth::user()->user_type === 'organizer') {
            return Inertia::render('Home/Organizer');
        } elseif (Auth::user()->user_type === 'participator') {
            return Inertia::render('Home/Participator');
        }
    }

    return Inertia::render('Home/Guest');
}
}
