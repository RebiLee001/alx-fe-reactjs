import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            {/* 👇 Use Link to navigate to details or edit pages */}
            <Link to={`/recipes/${recipe.id}`}>View Recipe</Link> |{' '}
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
