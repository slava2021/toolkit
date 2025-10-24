import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
// import { url } from "../../config";
// import styles from "./CardItem.module.css";

const CardItem = () => {
  const { isLoading, error, film, search } = useSelector(
    (state) => state.search
  );
  const { getFilmsByName } = useActions();
  const { imdbID } = useParams();
  const navigate = useNavigate();

  const url = "https://www.omdbapi.com?apikey=64405bd2&i=";

  const data = film;

  console.log("film: ", film);

  useEffect(() => {
    const urlByName = {
      url,
      value: imdbID,
      query: search,
      type: "imdbID",
    };
    getFilmsByName(urlByName);
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={data?.Poster}
            title="постер фильма(Poster)"
          />
          <Card.Body>
            <Card.Title>{data?.Title}</Card.Title>
            <Card.Text>
              год выпуска:
              <b>{data?.Year}</b>
              <br />
              жанр: <b>{data?.Genre}</b>
              <br />
              продолжительность: <b>{data?.Runtime}</b>
              <br />
              режиссер: <b>{data?.Director}</b>
              <br />
              актеры: <b>{data?.Actors}</b>
              <br />
              рейтинг фильма: <b>{data?.imdbRating}</b>
            </Card.Text>{" "}
            <Button variant="primary" onClick={() => navigate(-1)}>
              Go back
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default CardItem;
