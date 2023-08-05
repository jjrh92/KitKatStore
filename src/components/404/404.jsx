import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import { Link } from 'react-router-dom';

const ContenedorPaginaError = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
    backgroundColor: "white",
    
});


const TextoError = styled ("h1") ({

    textAlign: "center",
    color: ColoresJulioFood.fondo,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",
    paddingTop: "1em",
    paddingBottom: "1em",

});

const ImagenError = styled ("img") ({

    display: "flex",

});


function Error404 () {

    console.log ("El recurso que has intentado acceder no existe.");

    return (

        <ContenedorPaginaError>

            <TextoError>Error 404 - Page Not Found</TextoError>
   
            <Link draggable="false" style={{fontSize: "20px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt",}} to={"/"}>Volver al Home</Link>
            <ImagenError draggable="false" src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'></ImagenError>

        </ContenedorPaginaError>

    )

}

export default Error404;