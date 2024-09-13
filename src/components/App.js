import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "./db.json"; // Assuming your pet data is in a local JSON file

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  // Handle filter type change
  function handleChangeType(newType) {
    setFilters({ type: newType });
  }

  // Fetch pets based on the selected filter
  function handleFindPetsClick() {
    let filteredPets;
    if (filters.type === "all") {
      filteredPets = data.pets; // Assuming data.pets is your list of pets from db.json
    } else {
      filteredPets = data.pets.filter(pet => pet.type === filters.type);
    }
    setPets(filteredPets);
  }

  // Handle pet adoption
  function handleAdoptPet(id) {
    const updatedPets = pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;