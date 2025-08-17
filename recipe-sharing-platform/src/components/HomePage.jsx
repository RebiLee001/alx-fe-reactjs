import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";   // ✅ import Link
import recipesData from "../data.json";    // adjust path if needed

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from local JSON
    setRecipes(recipesData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}   // ✅ route to recipe detail
          className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-50 block"
        >
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
          <p className="text-sm text-gray-600">{recipe.summary}</p>
        </Link>
      ))}
    </div>
  );
}
