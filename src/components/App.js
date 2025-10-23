import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

const ITEMS = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList
        items={ITEMS}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;

