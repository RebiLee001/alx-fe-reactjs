import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import data from "./data.json";

function App() {
  const [recipes, setRecipes] = useState(data);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={<HomePage recipes={recipes} onSelect={() => {}} />}
          />

          {/* Recipe detail page */}
          <Route
            path="/recipe/:id"
            element={<RecipeDetail recipes={recipes} />}
          />

          {/* Add new recipe */}
          <Route
            path="/add"
            element={<AddRecipeForm onAdd={handleAddRecipe} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
