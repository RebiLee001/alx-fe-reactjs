import React, { useState } from "react";

export default function AddRecipeForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split("\n").map((step) => step.trim()),
    };

    onAdd(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-4 md:p-6 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        Add a Recipe
      </h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2 md:p-3"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Ingredients (comma-separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded p-2 md:p-3"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Steps (one per line)</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded p-2 md:p-3"
        />
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
}
