import React from "react";
import { Link } from "react-router-dom";

const Participator = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 bg-white shadow-lg rounded-lg p-8 text-center">
      {/* Titre de bienvenue */}
      <h1 className="text-4xl font-bold text-[#5D3F6B] mb-6">Bienvenue, Participant ! 🎉</h1>
      <p className="text-gray-600 text-lg mb-8">
        Rejoignez des événements passionnants, débloquez des indices et suivez vos tickets gagnés.
      </p>

      {/* Boutons d'action */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Bouton Voir les événements disponibles */}
        <Link
          to="/events/available"
          className="flex items-center justify-center bg-[#5D3F6B] text-white px-6 py-4 rounded-lg font-medium shadow-md hover:bg-[#9B4F96] transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M9 16h6m-3-9V4m0 4v4"
            />
          </svg>
          Voir les événements disponibles
        </Link>

        {/* Bouton Voir mes tickets */}
        <Link
          to="/tickets"
          className="flex items-center justify-center bg-[#C99E9A] text-white px-6 py-4 rounded-lg font-medium shadow-md hover:bg-[#A38E91] transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17a4 4 0 00-8 0M15 12h4m-2-2v4m4 0v4m-4-4h4"
            />
          </svg>
          Voir mes tickets
        </Link>
      </div>

      {/* Section Call-to-Action */}
      <div className="mt-8 text-sm text-gray-500">
        Besoin d'aide ? Consultez la{" "}
        <a href="#" className="text-[#5D3F6B] font-medium hover:underline">
          FAQ
        </a>{" "}
        ou contactez-nous.
      </div>
    </div>
  );
};

export default Participator;
