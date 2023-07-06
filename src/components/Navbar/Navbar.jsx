import React from "react";
import { styled } from '@mui/system';
import { Link } from "@mui/material";
import RutaLogo from "../../assets/logo.png";
import Categoria from "./Categoria/Categoria";
import CartWidget from "../Cart/CartWidget";
import { ColoresJulioFood } from "../../Colores";
import '../../Hover.css'

const Logo = styled ("img") ({

    height: "100%",
    width: "100%",

});


const ContenedorNavbar = styled ("header") ({

    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
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
                <Link href="./index.html" title="Click para refrescar la pagina"><Logo className="Logo hvr-grow" src={RutaLogo} alt="Logo Mejor vendo Empanadas"/></Link>
            </ContenedorLogo>

            <ContenedorCategorias>
                <Categoria Ruta="#1" Texto="Carne"/>
                <Categoria Ruta="#2" Texto="Pollo"/>
                <Categoria Ruta="#3" Texto="Vegan"/>
                <Categoria Ruta="#4" Texto="Bebidas"/>
                <Categoria Ruta="#5" Texto="Postres"/>
            </ContenedorCategorias>

            <CartWidget Cantidad={"3"}/>

        </ContenedorNavbar>
        
    );

};

export default Navbar;