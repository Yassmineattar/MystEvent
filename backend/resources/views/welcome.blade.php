@extends('layouts.app')

@section('title', 'Bienvenue sur MystEvent')

@section('content')
<!-- Carrousel -->
@vite('resources/js/app.jsx')

<div id="app"></div> <!-- Conteneur où l'application React sera rendue -->

<div class="relative w-full max-w-full mx-auto ">
    <div class="overflow-hidden">
        <div id="carousel" class="flex transition-transform duration-300">
            <!-- Slide 1 : Texte de bienvenue -->
            <div class="w-full flex-shrink-0 h-screen">
                <div class="relative w-full h-full bg-cover bg-center" style="background-image: url('https://c.pxhere.com/photos/ee/62/audience_band_blur_bokeh_celebration_club_concert_crowd-1557333.jpg!d');">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                        <h1 id="dynamic-text" class="text-7xl font-bold mb-6 text-white font-poppins py-12"></h1>
                        <p class="text-2xl mb-8 font-playfair px-12">Plongez dans des événements surprises où chaque moment compte ! Participez à des quiz interactifs et obtenez des indices exclusifs pour découvrir l'événement mystérieux qui vous attend. Résolvez les énigmes, débloquez des secrets et vivez une expérience unique ! Rejoignez l'aventure dès maintenant sur MystEvent !</p>
                        <div class="flex space-x-4">
                            <a href="{{ route('login') }}" class="bg-white text-[#5D3F6B] px-6 py-3 rounded-lg font-semibold hover:bg-[#F1E8E1] transition duration-300">
                                Se connecter
                            </a>
                            <a href="{{ route('register') }}" class="bg-[#F1E8E1] text-[#5D3F6B] px-6 py-3 rounded-lg font-semibold hover:bg-[#D9C7C7] transition duration-300">
                                S'inscrire
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2 : Image et texte supplémentaires -->
            
<div class="w-full flex-shrink-0 h-screen">
    <div class="relative w-full h-full bg-cover bg-center" style="background-image: url('https://static.vecteezy.com/ti/photos-gratuite/t1/38448832-ai-genere-femme-avec-or-masque-et-plumes-elegant-mardi-gras-mascarade-balle-dans-manoir-ai-genere-photo.jpg');">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
            <!-- Affichage du nom de l'événement -->
            <h1 class="text-7xl font-bold mb-6 text-white font-poppins">{{ $event->title }}</h1>
            <p class="text-2xl mb-8 font-playfair px-12">{{ $event->description }}</p>
            
            <!-- Compteur de jours restants -->
            <div id="countdown" class="text-center">
    <div class="countdown-item">
        <div id="days" class="countdown-number">00</div>
        <div class="countdown-label">Jours</div>
    </div>
    <div class="countdown-item">
        <div id="hours" class="countdown-number">00</div>
        <div class="countdown-label">Heures</div>
    </div>
    <div class="countdown-item">
        <div id="minutes" class="countdown-number">00</div>
        <div class="countdown-label">Minutes</div>
    </div>
    <div class="countdown-item">
        <div id="seconds" class="countdown-number">00</div>
        <div class="countdown-label">Secondes</div>
    </div>
</div>

<style>
    #countdown {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .countdown-item {
        text-align: center;
    }

    .countdown-number {
        font-size: 3rem;
        font-weight: bold;
        color: #FFFFFF;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 20px;
        border-radius: 10px;
        font-family: 'Roboto Mono', monospace;
    }

    .countdown-label {
        font-size: 1rem;
        color: #FFFFFF;
        margin-top: 5px;
    }
</style>

<script>
    const eventDate = new Date("2025-02-14T20:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "L'événement commence maintenant!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
</script>

        </div>
    </div>
</div>


            <!-- Slide 3 : Autre texte -->
            <div class="w-full flex-shrink-0 h-screen">
                <div class="relative w-full h-full bg-cover bg-center" style="background-image: url('https://via.placeholder.com/800x400');">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                        <h1 class="text-7xl font-bold mb-6 text-white">Rejoignez l'Aventure</h1>
                        <p class="text-xl mb-8 px-8">Résolvez des énigmes et débloquez des indices pour vos événements mystères !</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Flèches de navigation (cercle avec flèche) -->
<!-- Flèches de navigation (cercle plus petit avec flèche) -->
<button id="prev-btn" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white hover:bg-[#5D3F6B] p-3 rounded-full border-2 border-white hover:border-[#5D3F6B] transition duration-300">
    &#8592;
</button>

<button id="next-btn" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white hover:bg-[#5D3F6B] p-3 rounded-full border-2 border-white hover:border-[#5D3F6B] transition duration-300">
    &#8594;
</button>



</div>


    
<!-- Fonctionnalités Section -->
<div class="max-w-7xl mx-auto mt-16 px-6 lg:px-8">
    <h2 class="text-4xl font-semibold text-center text-[#5D3F6B] mb-12 font-poppins">
        Découvrez nos fonctionnalités uniques
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <!-- Fonctionnalité 1 : Organisateur -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center transform hover:translate-y-2">
            <img src="https://i.pinimg.com/736x/08/4c/33/084c334578eb54c4d0ea0dbe3dc6979a.jpg" alt="Créer des événements" class="h-36 w-60 mx-auto mb-4 object-cover rounded-lg">
            <h3 class="text-xl font-semibold text-[#5D3F6B] mb-2">Créez vos événements</h3>
            <p class="text-gray-600 mt-2">Organisez et personnalisez des événements surprises pour apporter du fun à votre communauté.</p>
        </div>

        <!-- Fonctionnalité 2 : Participant -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center transform hover:translate-y-2">
            <img src="https://i.pinimg.com/736x/4d/7f/20/4d7f202a0d827d6da2d5aea02e1320e0.jpg" alt="Rejoindre des événements" class="h-36 w-60 mx-auto mb-4 object-cover rounded-lg">
            <h3 class="text-xl font-semibold text-[#5D3F6B] mb-2">Participez à des événements mystères</h3>
            <p class="text-gray-600 mt-2">Rejoignez des événements secrets, résolvez des énigmes et vivez des expériences inoubliables.</p>
        </div>

        <!-- Fonctionnalité 3 : Quizz -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center transform hover:translate-y-2">
            <img src="https://i.pinimg.com/736x/2d/73/b9/2d73b9f67f338abbf3866a1e60d62060.jpg" alt="Répondre à des quizz" class="h-36 w-60 mx-auto mb-4 object-cover rounded-lg">
            <h3 class="text-xl font-semibold text-[#5D3F6B] mb-2">Répondez aux quizz</h3>
            <p class="text-gray-600 mt-2">Testez vos connaissances, débloquez des indices et gagnez des tickets pour des événements exclusifs !</p>
        </div>

    </div>
</div>

<!-- Call to Action Section -->
<div class="bg-[#5D3F6B] text-white py-12 mt-16 text-center rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
    <h2 class="text-3xl font-semibold mb-4">Rejoignez l'aventure maintenant !</h2>
    <p class="text-lg mb-8">Inscrivez-vous dès aujourd'hui et choisissez votre rôle : Organisateur ou Participant, c'est à vous de jouer !</p>
    <div class="flex justify-center space-x-4">
        <a href="{{ route('register') }}" class="bg-white text-[#5D3F6B] px-6 py-3 rounded-lg font-semibold hover:bg-[#F1E8E1] transition duration-300">
            S'inscrire
        </a>
    </div>
</div>


    <br>
    <script>
    const text = "Bienvenue sur MystEvent";
    let index = 0;
    const textElement = document.getElementById("dynamic-text");

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    window.onload = typeWriter;
</script>
<script>
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const carousel = document.getElementById("carousel");
    let currentIndex = 0;

    const slides = carousel.children;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Calculer le déplacement horizontal des slides
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
    });

    // Initialiser le carrousel
    goToSlide(currentIndex);
</script>


</div>

@endsection
