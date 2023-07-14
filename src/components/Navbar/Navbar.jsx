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

const ContenedorPadre = styled ("header") ({

    padding: "1rem 2rem 0rem 2rem",
    display: "flex",
    fontFamily: "KittyKatt",
    borderTop: "0.125rem solid",
    borderBottom: "0.125rem solid",
    borderColor: ColoresJulioFood.hover,
    flexDirection: "column",

});

const ContenedorHijo = styled ("header") ({

    display: "flex",
    justifyContent: "space-between",
    fontFamily: "KittyKatt",
    flexDirection: "row",

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

const TextoHeader = styled ("span") ({

    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "center",
    color: ColoresJulioFood.textos,
    userSelect: "none",
    fontFamily: "KittyKatt",
    paddingBottom: "1rem",

});

const Navbar = () => {
        
    return (

        <ContenedorPadre>
            <ContenedorHijo>

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

            </ContenedorHijo>
            
            <TextoHeader>
                🍫Postres exoticos a la puerta de tu casa📦
            </TextoHeader>
            
        </ContenedorPadre>
        
    );

};

export default Navbar;