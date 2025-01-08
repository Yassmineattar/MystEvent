<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{

    /* Code de chatgpt
    public function register(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8|confirmed',
        'user_type' => 'required|in:organizer,participator',
    ]);

    try {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type' => $request->user_type,
        ]);

        Auth::login($user);

        // Utilisation d'Inertia pour rediriger vers la bonne page en fonction du type d'utilisateur
        if ($user->user_type === 'organizer') {
            return Inertia::render('Home/Organizer');
        } elseif ($user->user_type === 'participator') {
            return Inertia::render('Home/Participator');
        }
    } catch (\Exception $e) {
        return back()->withErrors(['error' => 'Une erreur est survenue. Veuillez réessayer.']);
    }
}
*/
    /**Afficher le formulaire d'inscription.
     
    public function showRegisterForm()
    {
        return view('auth.register');
    }*/

    public function showRegisterForm()
    {
    return Inertia::render('Register');  // Retourne la page React 'Register' avec Inertia
    }

    //Traiter l'inscription. Ancien code pour registration
    
    public function register(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8|confirmed',
        'user_type' => 'required|in:organizer,participator',
    ]);

    try {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type' => $request->user_type,
        ]);

        Auth::login($user);

        return redirect()->route('home')->with('success', 'Inscription réussie ! Bienvenue sur la plateforme.');
    } catch (\Exception $e) {
        return back()->withErrors(['error' => 'Une erreur est survenue. Veuillez réessayer.']);
    }
}




    /**Afficher le formulaire de connexion.
     
    public function showLoginForm()
    {
        return view('auth.login');
    }*/
    
    public function showLoginForm()
{
    // Vous pouvez ajouter des données à passer à la vue React si nécessaire.
    // Par exemple, vous pourriez passer une variable pour savoir si l'utilisateur est déjà connecté.

    return Inertia::render('Login', [
        // Si vous avez des données à passer, vous pouvez les ajouter ici
        // Par exemple : 'user' => auth()->user()
    ]);
}


    /**
     * Traiter la connexion.
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
    
        $remember = $request->has('remember');
    
        if (Auth::attempt($request->only('email', 'password'), $remember)) {
            // Redirection selon le type d'utilisateur
            $user = Auth::user();
    
            if ($user->user_type === 'organizer') {
                return redirect()->route('home')->with('success', 'Bienvenue, Organisateur !');
            } elseif ($user->user_type === 'participator') {
                return redirect()->route('home')->with('success', 'Bienvenue, Participant !');
            }
        }
    
        // Message d'erreur plus précis
        return back()->withErrors([
            'email' => 'L’adresse email ou le mot de passe est incorrect. Veuillez vérifier vos informations et réessayer.',
        ]);
    }
    

    /**
     * Déconnexion de l'utilisateur.
     */
    public function logout()
    {
        Auth::logout();

        return redirect()->route('login');
    }
}
