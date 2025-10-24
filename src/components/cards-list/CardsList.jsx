import React from "react";
import styles from "./CardsList.module.css";
import { useFavorites } from "../../hooks/useFavorites";
import { useActions } from "../../hooks/useActions";
import { NavLink } from "react-router";

const CardsList = ({ data, totalResults }) => {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();

  const isExsists = data?.map((film) =>
    favorites.some((f) => f.imdbID === film.imdbID)
  );

  console.log("data.totalResults: ", data);

  return (
    <>
      <div className="list-group">
        {data &&
          data.map((film, index) => {
            return (
              <div className={styles.carditem} key={index}>
                <div>
                  <img
                    className={styles.img}
                    src={film.Poster}
                    alt={film.Title}
                    width={100}
                  />
                </div>
                <div>
                  <h3>
                    <a href="#">{film.Title}</a>
                  </h3>
                  {film.Type}
                  <br />
                  {film.Year}
                  <br />
                  <div className="button-container">
                    <button
                      // onClick={() => dispatch(actions.toggleFavorites(film))}
                      onClick={() => toggleFavorites(film)}
                      className={styles.button}
                    >
                      {isExsists[index] ? "Remove from" : "Add to favorites"}
                      {/* Add to favorites */}
                    </button>

                    <NavLink
                      className={styles.button}
                      to={`/card/${film.imdbID}`}
                    >
                      Подробнее
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {totalResults && (
        <p>
          Всего найдено: <b>{totalResults}</b>
        </p>
      )}
    </>
  );
};

export default CardsList;
