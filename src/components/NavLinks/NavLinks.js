import React from "react";

import "./NavLinks.css";
import { NavLink } from "react-router-dom";


const NavLinks = () => {
  return (
    <section className="navLinks">
      <nav className="navLinks__container">
        <NavLink to="./pizza" className="navLinks__container-link">
          <p  className="navLinks__link">
            Пицца
          </p>
        </NavLink>
        <NavLink to="./pizza" className="navLinks__container-link">
          <p  className="navLinks__link">
            Пицца
          </p>
        </NavLink>
        <NavLink to="./pizza" className="navLinks__container-link">
          <p  className="navLinks__link">
            Пицца
          </p>
        </NavLink>
        <NavLink to="./pizza" className="navLinks__container-link">
          <p  className="navLinks__link">
            Пицца
          </p>
        </NavLink>
        <NavLink to="./pizza" className="navLinks__container-link">
          <p className="navLinks__link">
            Пасты
          </p>
        </NavLink>
        <NavLink to="./pizza" className="navLinks__container-link">
          <p className="navLinks__link">
            Напитки
          </p>
        </NavLink>
      </nav>
    </section>
  );
};

export default NavLinks