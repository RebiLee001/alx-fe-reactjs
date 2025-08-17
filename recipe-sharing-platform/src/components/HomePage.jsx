import React, { useState, useEffect } from "react";
import recipesData from "../data.json"; // adjust path if needed

export default function HomePage({ onSelect }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from local JSON
    setRecipes(recipesData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-50"
          onClick={() => onSelect(recipe)}
        >
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
          {/* show summary instead of full ingredients list */}
          <p className="text-sm text-gray-600">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
}
