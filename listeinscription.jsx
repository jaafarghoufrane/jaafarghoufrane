
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const listeinscription= () => {
  const { ville } = useParams();
  const [inscriptions, setInscriptions] = useState([]); // Vous devrez récupérer les données de l'API
  const [searchVille, setSearchVille] = useState('');

  // Filtrer les inscriptions en fonction de la ville saisie
  const filteredInscriptions = inscriptions.filter((inscription) =>
    inscription.toLowerCase().includes(searchVille.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher une ville"
        value={searchVille}
        onChange={(e) => setSearchVille(e.target.value)}
      />
      <ul>
        {filteredInscriptions.map((inscription, index) => (
          <li key={index}>{inscription}</li>
        ))}
      </ul>
    </div>
  );
};

export default listeinscription;


