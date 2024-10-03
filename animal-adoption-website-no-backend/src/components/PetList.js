import React from 'react';

const pets = [
  { id: 1, name: 'Bella', description: 'Friendly and playful dog.' },
  { id: 2, name: 'Mittens', description: 'Loves to cuddle and nap.' },
  { id: 3, name: 'Charlie', description: 'Energetic and loves to play fetch.' },
];

const PetList = () => {
  return (
    <div className="pet-list">
      {pets.map(pet => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>{pet.description}</p>
          <a href={`/pets/${pet.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

export default PetList;
