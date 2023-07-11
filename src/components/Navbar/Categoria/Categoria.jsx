import React from "react";
import { Link } from "@mui/material";
import { ColoresJulioFood } from "../../../Colores";
import "../Categoria/Categoria.css";

const Categoria = (props) => {
        
    return (

        <Link draggable="false" className="Categoria" style={{fontSize: "40px", }} color={ColoresJulioFood.textos} underline="none" title="Ir al Submenu correspondiente" href={props.Ruta}>{props.Texto}</Link>

    );

};

export default Categoria;