import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Exemple de gestion des erreurs (tu peux intégrer un système de validation ici)
    const newErrors = [];
    if (!email) newErrors.push('Adresse e-mail est requise.');
    if (!password) newErrors.push('Mot de passe est requis.');

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // Envoyer les données (ou utiliser fetch/axios pour envoyer à l'API)
      console.log({ email, password });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-center text-[#5D3F6B] mb-6">Connexion</h2>

      {/* Affichage des erreurs */}
      {errors.length > 0 && (
        <div className="bg-[#c35e54] text-white rounded-md p-4 mb-6">
          {errors.map((error, index) => (
            <p key={index} className="text-sm">{error}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full p-3 bg-[#5D3F6B] text-white rounded-md">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
