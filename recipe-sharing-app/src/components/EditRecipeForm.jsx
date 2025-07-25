import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //
    updateRecipe({ ...recipe, title, description });
    navigate(`/recipe/${recipe.id}`);
  };

   return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <p><strong>Recipe ID:</strong> {recipe.id}</p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;