import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import { Link } from 'react-router-dom';
import FormularioContacto from './Formulario';

const ContenedorPaginaContacto = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
    backgroundColor: ColoresJulioFood.textos,
    
});


const TextoContacto = styled ("h1") ({

    textAlign: "center",
    color: ColoresJulioFood.fondo,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",
    paddingTop: "1em",
    paddingBottom: "1em",

});

function Contacto () {

    return (

        <ContenedorPaginaContacto>

            <TextoContacto>Formulario de Contacto</TextoContacto>
            <TextoContacto>Usalo para pedir al admin que agregue algun producto especifico ó enviale un saludo.</TextoContacto>
            <TextoContacto className='TextChange'>Filtro AntiSpam: Por favor resolver el CAPTCHA y habilitaremos el boton de envio.</TextoContacto>
            <FormularioContacto/>
            <Link draggable="false" style={{fontSize: "20px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px", paddingTop: "15px",}} to={"/"}>Volver al Home</Link>

        </ContenedorPaginaContacto>

    )

}

export default Contacto;