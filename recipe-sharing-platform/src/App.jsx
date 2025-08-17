import React, { useState } from 'react'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm'
import data from './data.json'

function App() {
  const [recipes, setRecipes] = useState(data)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe])
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {selectedRecipe ? (
        <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        <>
          <HomePage recipes={recipes} onSelect={setSelectedRecipe} />
          <AddRecipeForm onAdd={handleAddRecipe} />
        </>
      )}
    </div>
  )
}

export default App
