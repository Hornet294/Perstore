import React from 'react';
import { useParams } from 'react-router-dom';

const pets = [
  { id: 1, name: 'Bella', description: 'Friendly and playful dog.' },
  { id: 2, name: 'Mittens', description: 'Loves to cuddle and nap.' },
  { id: 3, name: 'Charlie', description: 'Energetic and loves to play fetch.' },
];

const PetDetails = () => {
  const { id } = useParams();
  const pet = pets.find(pet => pet.id === Number(id));

  return (
    <div>
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
      <a href={`/adopt/${pet.id}`}>Adopt Me!</a>
    </div>
  );
};

export default PetDetails;
