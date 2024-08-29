import React, { useState } from "react";
import data from "./db.json"

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


  function handleChangeType(type){
    setFilters({...filters,type});
  }

  function handleFindPetsClick() {
    let url="/api/pets";
 
  if (filters.type !== "all") {
    url += `?type=${filters.type}`;
  }

  fetch(url)
      .then((res) => res.json())
      .then((pets) => setPets(pets));
  }

  function onAdoptPet(id) {
    const updatedPets = pets.map((pet) =>
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
            <Filters />
          </div>
          <div className="twelve wide column">
            <PetBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;