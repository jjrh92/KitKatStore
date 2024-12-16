import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { ColoresJulioFood } from "../../Colores";
import Marquesina from "../Marquesina/Marquesina";
import "./Footer.css";

const ContenedorFooter = styled("footer")({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  borderTop: "0.125rem solid",
  borderBottom: "0.125rem solid",
  borderColor: ColoresJulioFood.hover,
});

const TextoFooter = styled("span")({
  fontWeight: "bold",
  fontSize: "24px",
  textAlign: "center",
  color: ColoresJulioFood.textos,
  userSelect: "none",
  fontFamily: "KittyKatt",
  textDecoration: "none",
});

const ContenedorBotones = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "6px",
  gap: "10px",
});

const Footer = () => {
  return (
    <ContenedorFooter>
      <Marquesina />

      <TextoFooter
        href="www.julioreyes.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit my portfolio at
      </TextoFooter>

      <Button
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          color: ColoresJulioFood.textos,
          userSelect: "none",
          fontFamily: "KittyKatt",

          textDecoration: "none",
        }}
        draggable="false"
        variant="text"
        title="Visit my Portfolio"
        href="https://www.julioreyes.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        julioreyes.dev
      </Button>

      <ContenedorBotones>
        <Button
          draggable="false"
          className="boton"
          variant="text"
          title="LinkedIn"
          href="https://www.linkedin.com/in/jjrh92/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            className="boton"
            sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}
          />
        </Button>
        <Button
          draggable="false"
          className="boton"
          variant="text"
          title="Github"
          href="https://www.github.com/jjrh92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            className="boton"
            sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}
          />
        </Button>
        <Button
          draggable="false"
          variant="text"
          title="Telegram"
          href="https://t.me/jjrh92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon
            className="boton"
            sx={{ fontSize: "3rem", color: ColoresJulioFood.textos }}
          />
        </Button>
      </ContenedorBotones>
    </ContenedorFooter>
  );
};

export default Footer;
