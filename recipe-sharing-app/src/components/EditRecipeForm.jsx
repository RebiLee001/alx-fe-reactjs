import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Prevent page reload

    updateRecipe({
      id: recipe.id,
      title,
      description
    });

    if (onClose) onClose(); // Optional: close modal or hide form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
