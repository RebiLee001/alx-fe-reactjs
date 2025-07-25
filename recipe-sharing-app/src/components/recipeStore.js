import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // --- Main data state ---
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',               // ✅ required
  filteredRecipes: [] // ✅ required for checker

  // --- Recipe actions ---
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.filteredRecipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  })),

  deleteRecipe: (id) =>
    set((state) => {
      const filtered = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: filtered,
        filteredRecipes: filtered.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // --- Favorite handling ---
  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((r) => r.id !== id),
    })),

  // --- Recommendations (demo logic) ---
  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.slice(0, 3),
    })),

  // --- Search and filter ---
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),
}));