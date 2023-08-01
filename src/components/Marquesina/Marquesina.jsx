import React from "react";
import Marquee from "react-fast-marquee";
import { ColoresJulioFood } from "../../Colores";
import { styled } from '@mui/system';

const ContenedorMarquesina = styled ("div") ({

    paddingTop: "15px",

});

const TextoMarquesina = styled ("p") ({

    color: ColoresJulioFood.textos,
    fontFamily: "KittyKatt",
    fontSize: "24px",
    height: "70px",
    userSelect: "none",

});

const Marquesina = () => {
        
    return (

        <ContenedorMarquesina>
            <Marquee speed="100">

                <TextoMarquesina>Delivery gratis para compras sobre $30usd.</TextoMarquesina>

            </Marquee>
        </ContenedorMarquesina>
        
    );

};

export default Marquesina;