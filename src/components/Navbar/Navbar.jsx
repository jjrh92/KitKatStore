import React from "react";
import { styled } from '@mui/system';
import Enlace from "../Enlace/Enlace";
import RutaLogo from "../../assets/logo.png";
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

const ContenedorHijo = styled ("section") ({

    display: "flex",
    justifyContent: "space-between",
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

const TextoHeader = styled ("p") ({

    fontWeight: "bold",
    fontSize: "24px",
    color: ColoresJulioFood.textos,
    userSelect: "none",
    fontFamily: "KittyKatt",
    paddingBottom: "1rem",
    textAlign: "center",

});

const Navbar = () => {
        
    return (

        <ContenedorPadre>
            <ContenedorHijo>

                <ContenedorLogo>
                    <Logo title="Logo" className="Logo" draggable="false" src={RutaLogo} alt="Kilo&Kilo Logo"/>
                </ContenedorLogo>

                <ContenedorCategorias>
                    <Enlace Ruta="/" Texto="Home"/>
                    <Enlace Ruta="/product/6" Texto="Nosotros"/>
                    <Enlace Ruta="*" Texto="Contacto"/>
                </ContenedorCategorias>

                <CartWidget Cantidad={""}/>

            </ContenedorHijo>
            
            <TextoHeader>🍫Postres exoticos a la puerta de tu casa📦</TextoHeader>
            
        </ContenedorPadre>
        
    );

};

export default Navbar;