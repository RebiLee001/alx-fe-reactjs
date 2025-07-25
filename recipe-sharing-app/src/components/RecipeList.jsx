import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  
  // SETTERS
  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));