import React, { useEffect } from "react";
import data from "../data.json";

export default function RecipeDetail({ recipe, onBack }) {
  useEffect(() => {
    console.log("Viewing recipe:", recipe);
  }, [recipe]);

  return (
    <div className="bg-white p-6 rounded shadow">
      <button onClick={onBack} className="mb-4 text-blue-500 hover:underline">
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}
