import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  // Handles the change event of the select dropdown
  function handleSelectChange(event) {
    onChangeType(event.target.value); // Calls the callback to update the filter type in the App component
  }

  // Handles the click event of the "Find pets" button
  function handleFindPetsClick() {
    onFindPetsClick(); // Calls the callback to fetch the pets based on the selected type
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleFindPetsClick}>
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;