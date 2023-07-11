import React from "react";
import { styled } from '@mui/system';
import { Link } from "@mui/material";
import RutaLogo from "../../assets/logo.png";
import Categoria from "./Categoria/Categoria";
import CartWidget from "../Cart/CartWidget";
import { ColoresJulioFood } from "../../Colores";

const Logo = styled ("img") ({

    height: "100%",
    width: "80%",

});

const ContenedorNavbar = styled ("header") ({

    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "KittyKatt",
    borderTop: "0.125rem solid",
    borderBottom: "0.125rem solid",
    borderColor: ColoresJulioFood.textos,

});

const ContenedorLogo = styled ("div") ({

    display: "flex",
    userSelect: "none",

});

const ContenedorCategorias = styled ("div") ({

    display: "flex",
    alignItems: "center",
    gap: "2.5rem",
    userSelect: "none",

});

const Navbar = () => {
        
    return (

        <ContenedorNavbar>

            <ContenedorLogo>
                <Link draggable="false" href="./index.html" title="Click para refrescar la pagina"><Logo className="Logo" draggable="false" src={RutaLogo} alt="Kilo&Kilo Logo"/></Link>
            </ContenedorLogo>

            <ContenedorCategorias>
                <Categoria Ruta="#1" Texto="Menu1"/>
                <Categoria Ruta="#2" Texto="Menu2"/>
                <Categoria Ruta="#3" Texto="Menu3"/>
                <Categoria Ruta="#4" Texto="Menu4"/>
                <Categoria Ruta="#5" Texto="Menu5"/>
            </ContenedorCategorias>

            <CartWidget Cantidad={""}/>

        </ContenedorNavbar>
        
    );

};

export default Navbar;