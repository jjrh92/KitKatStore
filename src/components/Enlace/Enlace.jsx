import React from "react";
import { NavLink } from "react-router-dom";
import { ColoresJulioFood } from "../../Colores";

const Enlace = (props) => {
  return (
    <nav id="Enlace">
      <NavLink
        to={props.Ruta}
        style={({ isActive }) => {
          return {
            fontSize: isActive ? "40px" : "40px",
            color: isActive ? ColoresJulioFood.hover : ColoresJulioFood.textos,
            textDecoration: isActive ? "none" : "none",
          };
        }}
      >
        {props.Texto}
      </NavLink>
    </nav>
  );
};

export default Enlace;
