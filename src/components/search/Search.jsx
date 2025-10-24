import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
// import { actions } from "../../store/search/search.slice";
import { url } from "../../config";
import CardsList from "../cards-list/CardsList";

const Search = () => {
  const { isLoading, error, search } = useSelector((state) => state.search);
  const { getFilmsByName } = useActions();
  const [form, setForm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const urlByName = {
      url,
      value: form,
      type: "name",
    };
    getFilmsByName(urlByName);
  }

  function handleChange(e) {
    setForm(e.target.value);
  }

  return (
    <>
      <Form>
        <Row>
          <Col sm={8} className="input-group rounded">
            <Form.Control
              className="shadow-none"
              id="serch"
              name="input"
              placeholder="Поиск"
              type="text"
              value={form}
              onChange={handleChange}
            />
            <Button type="submit" onClick={handleSubmit}>
              Искать
            </Button>
          </Col>
        </Row>
      </Form>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <CardsList data={search?.Search} totalResults={search?.totalResults} />
      )}
    </>
  );
};

export default Search;
