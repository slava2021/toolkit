import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <ButtonGroup>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "btn btn-secondary active" : "btn btn-secondary"
        }
      >
        Search
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? "btn btn-secondary active" : "btn btn-secondary"
        }
      >
        Favorites
      </NavLink>
    </ButtonGroup>
  );
};

export default Menu;
