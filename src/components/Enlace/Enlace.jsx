import React from "react";
import { Link } from "react-router-dom";
import { ColoresJulioFood } from "../../Colores";
import "../Enlace/Enlace.css";

const Enlace = (props) => {
        
    return (

        <Link className="Enlace" draggable="false" style={{fontSize: "40px", color: ColoresJulioFood.textos, textDecoration: "none",}} to={props.Ruta}>{props.Texto}</Link>

    );

};

export default Enlace;