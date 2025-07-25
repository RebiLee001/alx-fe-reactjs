import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
// Import other components like Home, RecipeList, etc.
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h2>Home Page or Recipe List</h2>} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

