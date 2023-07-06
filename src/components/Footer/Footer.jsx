import React from "react";
import { styled } from '@mui/system';
import { Link, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ColoresJulioFood } from "../../Colores";
import "./Footer.css";
// import '../../Hover.css'

const ContenedorFooter = styled ("footer") ({

    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    borderTop: "0.125rem solid",
    borderColor: ColoresJulioFood.textos,

});

const TextoFooter = styled ("span") ({

    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
    color: ColoresJulioFood.textos,

});

const ContenedorBotones = styled("div") ({

    display: "flex",
    justifyContent: "center",
    marginTop: "6px",
    gap: "13px",

});

const Footer = () => {
        
    return (

        <ContenedorFooter>

             <TextoFooter>
                Proyecto Académico
            </TextoFooter>

            <TextoFooter>
                Comisión 43305 ReactJS Coderhouse
            </TextoFooter>

            <ContenedorBotones>
                <Button className="hvr-pop" variant="text" title="Contáctame por LinkedIn" href="https://www.linkedin.com/in/jjrh92/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}/>
                </Button>
                <Button className="hvr-pop" variant="text" title="Sígueme en Github" href="https://www.github.com/jjrh92" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}/>
                </Button>
                <Button className="hvr-pop" variant="text" title="Contáctame por Telegram" href="https://t.me/jjrh92" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}/>
                </Button>
            </ContenedorBotones>

        </ContenedorFooter>
        
    );

};

export default Footer;