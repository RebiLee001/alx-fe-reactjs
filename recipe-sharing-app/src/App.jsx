import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
// Import other components like Home, RecipeList, etc.

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

