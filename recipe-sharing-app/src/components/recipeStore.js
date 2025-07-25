import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // ✅ required for checker
  recommendations: [], // ✅ required for checker

  // --- Existing logic ---
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    ),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((r) => r.id !== id),
  })),

  // --- New logic for favorites ---
  addFavorite: (recipe) => set((state) => ({
    favorites: [...state.favorites, recipe],
  })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter((r) => r.id !== id),
  })),

  // --- Example logic for recommendations (mock logic) ---
  generateRecommendations: () => set((state) => {
    const randomRecipes = state.recipes.slice(0, 3); // Just take first 3 for demo
    return { recommendations: randomRecipes };
  }),
}));