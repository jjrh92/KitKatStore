import React from "react";
import { Link } from "@mui/material";
import { ColoresJulioFood } from "../../../Colores";
import "../Categoria/Categoria.css";
// import "../../../Hover.css"

const Categoria = (props) => {
        
    return (

        <Link className="Categoria hvr-hang" style={{fontSize: "40px", fontWeight: "bold"}} color={ColoresJulioFood.textos} underline="none" title="Ir al Submenu correspondiente" href={props.Ruta}>{props.Texto}</Link>

    );

};

export default Categoria;