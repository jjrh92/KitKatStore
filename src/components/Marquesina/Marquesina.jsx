import React from "react";
import Marquee from "react-fast-marquee";
import { ColoresJulioFood } from "../../Colores";
import { styled } from '@mui/system';

const ContenedorMarquesina = styled ("div") ({

    paddingTop: "15px",

});

const TextoMarquesina = styled ("p") ({

    color: ColoresJulioFood.hover,
    fontFamily: "KittyKatt",
    fontSize: "30px",
    height: "710px",

});

const Marquesina = () => {
        
    return (

        <ContenedorMarquesina>
            <Marquee>

                <TextoMarquesina>Las compras sobre los $40usd obtienen despacho gratis.</TextoMarquesina>

            </Marquee>
        </ContenedorMarquesina>
        
    );

};

export default Marquesina;