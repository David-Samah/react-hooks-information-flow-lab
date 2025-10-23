import React from "react";

function Filter({ onCategoryChange, selectedCategory }) {
  function handleChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <select name="filter" onChange={handleChange} value={selectedCategory}>
      <option value="All">All</option>
      <option value="Dairy">Dairy</option>
      <option value="Produce">Produce</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
