import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  const [editing, setEditing] = useState(false);

  if (!recipe) return <p>Recipe not found</p>
  return (
    <div>
      {!editing ? (
        <>
          <h1>{recipe.title}</h1>
          <p><strong>ID:</strong> {recipe.id}</p> {/* ✅ Ensure recipe.id is shown */}
          <p>{recipe.description}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <DeleteRecipeButton id={id} />
        </>
      ) : (
        <EditRecipeForm recipe={recipe} />
      )}
    </div>
  );
};

export default RecipeDetails; 