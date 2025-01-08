import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [typedText, setTypedText] = useState("");
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Animation du texte "typewriter"
    const text = "Bienvenue sur MystEvent";
    let index = 0;

    const typeWriter = () => {
      if (index < text.length) {
        setTypedText((prevText) => prevText + text.charAt(index));
        index++;
        setTimeout(typeWriter, 100);
      }
    };

    typeWriter();

    // Gestion du carrousel
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const carousel = document.getElementById("carousel");
    let currentIndex = 0;

    const goToSlide = (index) => {
      const slides = carousel.children;
      const totalSlides = slides.length;

      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    };

    prevBtn.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
    });

    goToSlide(currentIndex);

    // Mise à jour du compteur de temps
    const eventDate = new Date("2025-02-14T20:00:00").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(countdownInterval);
        setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days < 10 ? "0" + days : days,
        hours: hours < 10 ? "0" + hours : hours,
        minutes: minutes < 10 ? "0" + minutes : minutes,
        seconds: seconds < 10 ? "0" + seconds : seconds,
      });
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    
    <div>
      {/* Carrousel */}
      <div className="relative w-full max-w-full mx-auto">
        <div className="overflow-hidden">
          <div id="carousel" className="flex transition-transform duration-300">
            {/* Slide 1 */}
            <div className="w-full flex-shrink-0 h-screen">
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://c.pxhere.com/photos/ee/62/audience_band_blur_bokeh_celebration_club_concert_crowd-1557333.jpg!d')",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                  <h1
                    id="dynamic-text"
                    className="text-7xl font-bold mb-6 text-white font-poppins py-12"
                  >
                    Bienvenue dans MystEvent
                  </h1>
                  <p className="text-2xl mb-8 font-playfair px-12">
                    Plongez dans des événements surprises où chaque moment compte !
                    Participez à des quiz interactifs et obtenez des indices exclusifs pour
                    découvrir l'événement mystérieux qui vous attend. Résolvez les énigmes,
                    débloquez des secrets et vivez une expérience unique ! Rejoignez
                    l'aventure dès maintenant sur MystEvent !
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="/login"
                      className="bg-white text-[#5D3F6B] px-6 py-3 rounded-lg font-semibold hover:bg-[#F1E8E1] transition duration-300"
                    >
                      Se connecter
                    </a>
                    <a
                      href="/register"
                      className="bg-[#F1E8E1] text-[#5D3F6B] px-6 py-3 rounded-lg font-semibold hover:bg-[#D9C7C7] transition duration-300"
                    >
                      S'inscrire
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="w-full flex-shrink-0 h-screen">
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/ti/photos-gratuite/t1/38448832-ai-genere-femme-avec-or-masque-et-plumes-elegant-mardi-gras-mascarade-balle-dans-manoir-ai-genere-photo.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                  <h1 className="text-7xl font-bold mb-6 text-white font-poppins py-12">Soirée Masquerade Ball</h1>
                  <p className="text-2xl mb-8 font-playfair px-12">Plongez dans l'élégance et le mystère d'une soirée inoubliable avec notre Masquerade Ball</p>
                  {/* Compteur de jours restants */}
                  {/* Compteur */}
        <div id="countdown" className="text-center flex space-x-4 justify-center my-12">
          <div className="countdown-item">
            <div className="countdown-number">{countdown.days}</div>
            <div className="countdown-label">Jours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.hours}</div>
            <div className="countdown-label">Heures</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.seconds}</div>
            <div className="countdown-label">Secondes</div>
          </div>
        </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="w-full flex-shrink-0 h-screen">
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://via.placeholder.com/800x400')",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                  <h1 className="text-7xl font-bold mb-6 text-white">Rejoignez l'Aventure</h1>
                  <p className="text-xl mb-8 px-8">Résolvez des énigmes et débloquez des indices pour vos événements mystères !</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flèches de navigation */}
        <button
          id="prev-btn"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white hover:bg-[#5D3F6B] p-3 rounded-full border-2 border-white hover:border-[#5D3F6B] transition duration-300"
        >
          &#8592;
        </button>

        <button
          id="next-btn"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white hover:bg-[#5D3F6B] p-3 rounded-full border-2 border-white hover:border-[#5D3F6B] transition duration-300"
        >
          &#8594;
        </button>
      </div>

      {/* Fonctionnalités Section */}
      <div className="max-w-7xl mx-auto mt-16 px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center text-[#5D3F6B] mb-12 font-poppins">
          Découvrez nos fonctionnalités uniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Fonctionnalité 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center transform hover:translate-y-2">
            <img
              src="https://i.pinimg.com/736x/08/4c/33/084c334578eb54c4d0ea0dbe3dc6979a.jpg"
              alt="Créer des événements"
              className="h-36 w-60 mx-auto mb-4 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-[#5D3F6B] mb-2">Créez vos événements</h3>
            <p className="text-gray-600 mt-2">Organisez et personnalisez des événements surprises pour apporter du fun à votre communauté.</p>
          </div>
          {/* Fonctionnalité 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center transform hover:translate-y-2">
            <img
              src="https://i.pinimg.com/736x/4d/7f/20/4d7f202a0d827d6da2d5aea02e1320e0.jpg"
              alt="Rejoindre des événements"
              className="h-36 w-60 mx-auto mb-4 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-[#5D3F6B] mb-2">Participez à des événements mystères</h3>
            <p className="text-gray-600 mt-2">Rejoignez des événements secrets, résolvez des énigmes et vivez des expériences inoubliables.</p>
          </div>
          {/* Fonctionnalité 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center transform hover:translate-y-2">
            <img
              src="https://i.pinimg.com/736x/2d/73/b9/2d73b9f67f338abbf3866a1e60d62060.jpg"
              alt="Répondre à des quizz"
              className="h-36 w-60 mx-auto mb-4 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-[#5D3F6B] mb-2">Répondez aux quizz</h3>
            <p className="text-gray-600 mt-2">Testez vos connaissances, débloquez des indices et gagnez des tickets pour des événements exclusifs !</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        style={{ height: "400px" }}
        className="relative bg-[#5D3F6B] text-white py-16 mt-16 text-center rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
      >
        {/* Fireworks Animation Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5D3F6B] to-[#9B4F96] opacity-70 z-0"></div>
        <div id="fireworks-container" className="absolute inset-0 z-0"></div>

        {/* Animated Scrolling Images */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="flex w-max animate-scrollImages">
            {/* Images qui défilent */}
            <img
              src="https://i.pinimg.com/736x/91/2f/68/912f6806c19e94a1073f218672af5d0f.jpg"
              className="object-cover h-full w-1/3"
              alt="Image 1"
            />
            <img
              src="https://media.istockphoto.com/id/1397223333/fr/photo/des-amis-assis-autour-dun-feu-de-joie-sur-la-plage-le-soir.jpg?s=612x612&w=0&k=20&c=8HJFn6uc1md_RMO2j-OR4hSFqJgS_pBMGWKhDSvOmpw="
              className="object-cover h-full w-1/3"
              alt="Image 2"
            />
            <img
              src="https://i.pinimg.com/736x/dc/e4/30/dce4309363fa29fea2de08cd51db45cc.jpg"
              className="object-cover h-full w-1/3"
              alt="Image 3"
            />
            <img
              src="https://i.pinimg.com/736x/91/2f/68/912f6806c19e94a1073f218672af5d0f.jpg"
              className="object-cover h-full w-1/3"
              alt="Image 1"
            />
          </div>
        </div>

        <h2 className="text-5xl font-extrabold mb-4 text-shadow-lg z-10 relative">
          Rejoignez l'aventure maintenant !
        </h2>
        <p className="text-xl mb-8 font-medium z-10 relative">
          Inscrivez-vous dès aujourd'hui et choisissez votre rôle : Organisateur ou
          Participant, c'est à vous de jouer !
        </p>
        <div className="flex justify-center space-x-6 z-10 relative">
          <a
            href="/register"
            className="bg-white text-[#5D3F6B] px-8 py-4 rounded-full font-bold shadow-lg hover:scale-110 hover:bg-[#F1E8E1] transform transition duration-300"
          >
            S'inscrire
          </a>
        </div>
      </div>
      {/* Ajout du style directement dans JSX */}
      <style>
        {`
          @keyframes scrollImages {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }

          .animate-scrollImages {
            animation: scrollImages 30s linear infinite;
          }

          .flex {
            display: flex;
          }
          .object-cover {
            object-fit: cover;
          }
          .h-full {
            height: 100%;
          }
          .w-1\/3 {
            width: 33.33%;
          }
            
        `}
        {`
          #countdown {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }

          .countdown-item {
            text-align: center;
          }

          .countdown-number {
            font-size: 4rem;
            font-weight: bold;
            color: #FFFFFF;
            background-color: rgba(0, 0, 0, 0.7); /* Fond sombre */
            padding: 20px 40px;
            border-radius: 12px; /* Coins arrondis */
            font-family: 'Roboto Mono', monospace;
          }

          .countdown-label {
            font-size: 1rem;
            color: #FFFFFF;
            margin-top: 5px;
            font-family: 'Arial', sans-serif;
          }
        `}
      </style>
    </div>
    
  );
  
}
