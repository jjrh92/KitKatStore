import React from "react";
import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import Marquesina from "../Marquesina/Marquesina";

const ContenedorBanner = styled ("section") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    backgroundColor: ColoresJulioFood.fondo,
    backgroundImage: `url(${"https://trumpwallpapers.com/wp-content/uploads/Kitkat-Wallpaper-01-2000-x-1000.jpg"})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    borderBottom: "1px solid",
    borderColor: ColoresJulioFood.hover,

});

const H1Hero = styled ("h1") ({

    color: ColoresJulioFood.textos,
    fontFamily: "KittyKatt",
    fontSize: "35px",

});

const TextoHero = styled ("p") ({

    color: ColoresJulioFood.textos,
    fontFamily: "KittyKatt",
    fontSize: "18px",
    lineHeight: "21px",
    maxWidth: "600px",
    fontWeight: "500",
    paddingTop: "10px",

});


const ContenedorTextos = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyItems: "end",  

});

const Hero = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    alignItems: "end",
    justifyItems: "end",
    userSelect: "none",

});


const Banner = () => {

    return (

        <ContenedorBanner>

            <Marquesina />

            <Hero>

                <ContenedorTextos>
                    <H1Hero>Bienvenido a Kilo & Kilo</H1Hero>
                    <TextoHero>LLevamos a su casa los sabores exoticos de KitKat.</TextoHero>
                </ContenedorTextos>
    
            </Hero>

        </ContenedorBanner>

    );

};

export default Banner;