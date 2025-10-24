// import { useEffect } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import CardsList from "../cards-list/CardsList";
import { useActions } from "../../hooks/useActions";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const { addFavoritesLocal } = useActions();

  if (favorites.length === 0) {
    let itemsFavorites = localStorage.getItem("favoritesLocal");
    addFavoritesLocal(JSON.parse(itemsFavorites));
  }

  return (
    <>
      <h1>Favorite Films</h1>
      {favorites.length !== 0 ? (
        <>
          <CardsList data={favorites} />
          <NavLink to="/">На главную</NavLink>
        </>
      ) : (
        <div>В избранном нет фильмов</div>
      )}
    </>
  );
}
