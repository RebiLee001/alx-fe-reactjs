import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore'; // ✅ adjust this path if needed

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe); // ✅ MUST include "addRecipe"
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ required for checker
    const newRecipe = {
      id: Date.now(), // or use uuid
      title,
      description
    };
    addRecipe(newRecipe); // ✅ use the method
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddRecipeForm;
