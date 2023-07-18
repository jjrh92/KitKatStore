import React from "react";
import { styled } from '@mui/system';
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ColoresJulioFood } from "../../Colores";
import Marquesina from "../Marquesina/Marquesina";
import "./Footer.css";


const ContenedorFooter = styled ("footer") ({

    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    borderTop: "0.125rem solid",
    borderBottom: "0.125rem solid",
    borderColor: ColoresJulioFood.hover,

});

const TextoFooter = styled ("span") ({

    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "center",
    color: ColoresJulioFood.textos,
    userSelect: "none",
    fontFamily: "KittyKatt",
    paddingBottom: "1rem",

});

const ContenedorBotones = styled("div") ({

    display: "flex",
    justifyContent: "center",
    marginTop: "6px",
    gap: "10px",

});

const Footer = () => {
        
    return (

        <ContenedorFooter>

            <Marquesina />

            <TextoFooter>
                Comision 43305 - Agosto 2023.
            </TextoFooter>

            <ContenedorBotones>
                <Button draggable="false" className="boton" variant="text" title="Contáctame por LinkedIn" href="https://www.linkedin.com/in/jjrh92/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="boton" sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}/>
                </Button>
                <Button draggable="false" className="boton" variant="text" title="Sígueme en Github" href="https://www.github.com/jjrh92" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="boton" sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}/>
                </Button>
                <Button draggable="false" variant="text" title="Contáctame por Telegram" href="https://t.me/jjrh92" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon className="boton" sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}/>
                </Button>
            </ContenedorBotones>

        </ContenedorFooter>
        
    );

};

export default Footer;