import React, { useState } from "react";
//test 
const Register = () => {
  // États pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    user_type: "organizer", // Valeur par défaut
  });

  // États pour afficher les erreurs et le message de succès
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Gérer le changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Réinitialiser les erreurs

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // Ajouter le token CSRF
        },
        body: JSON.stringify(formData), // Corps de la requête avec les données du formulaire
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage("Inscription réussie !"); // Message de succès
      }

      if (data.errors) {
        setErrors(data.errors); // Afficher les erreurs retournées par Laravel
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-center text-[#5D3F6B] mb-6">Inscription</h2>

      {/* Message de succès */}
      {successMessage && (
        <div className="bg-[#C99E9A] text-white rounded-md p-4 mb-6">
          {successMessage}
        </div>
      )}

      {/* Formulaire d'inscription */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ Nom */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#5D3F6B]">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B4F96]"
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrez votre nom"
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Champ Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#5D3F6B]">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B4F96]"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Champ Mot de Passe */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#5D3F6B]">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B4F96]"
            value={formData.password}
            onChange={handleChange}
            placeholder="Choisissez un mot de passe"
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Champ Confirmer le Mot de Passe */}
        <div>
          <label htmlFor="password_confirmation" className="block text-sm font-medium text-[#5D3F6B]">Confirmer le mot de passe</label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B4F96]"
            value={formData.password_confirmation}
            onChange={handleChange}
            placeholder="Confirmez votre mot de passe"
            required
          />
        </div>

        {/* Champ Type d'Utilisateur */}
        <div>
          <label htmlFor="user_type" className="block text-sm font-medium text-[#5D3F6B]">Type d'utilisateur</label>
          <select
            name="user_type"
            id="user_type"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B4F96]"
            value={formData.user_type}
            onChange={handleChange}
          >
            <option value="organizer">Organisateur</option>
            <option value="participator">Participant</option>
          </select>
          {errors.user_type && <p className="text-red-500 text-sm mt-1">{errors.user_type}</p>}
        </div>

        {/* Bouton de Soumission */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#5D3F6B] text-white py-3 rounded-md text-sm font-medium hover:bg-[#9B4F96] transition duration-200"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
