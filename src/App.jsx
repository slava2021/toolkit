import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CardItem from "./components/card-item/CardItem";
import Menu from "./components/menu/Menu";
import HomePage from "./components/Pages/HomePage";
import FavoritesPage from "./components/Pages/FavoritesPage";

function App() {
  return (
    <Router basename="/">
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/card/:imdbID" element={<CardItem />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
