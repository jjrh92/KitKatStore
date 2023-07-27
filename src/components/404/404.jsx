import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import { Link } from 'react-router-dom';

const ContenedorPaginaError = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
    backgroundColor: ColoresJulioFood.textos,
    
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


});


function Error404 () {

    return (

        <ContenedorPaginaError>


            <TextoError>Error 404 - Page Not Found</TextoError>
            <Link draggable="false" style={{fontSize: "20px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px",}} to={"/"}>Volver al Home</Link>
            <ImagenError draggable="false" src='https://hub.tabnine.com/v9/static/media/lost-connection-image.ad67b7df6edbf135ebe5f47ab08251c4.svg'></ImagenError>

        </ContenedorPaginaError>

    )

}

export default Error404;