import React from "react";

export default function HomePage({ recipes, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-50"
          onClick={() => onSelect(recipe)}
        >
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
          <p className="text-sm text-gray-600">{recipe.ingredients.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
