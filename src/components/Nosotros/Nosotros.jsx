import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import Button from '@mui/material/Button';

const ContenedorPaginaNosotros = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
    backgroundColor: ColoresJulioFood.textos,
    
});


const TextoNosotros = styled ("h1") ({

    textAlign: "center",
    color: ColoresJulioFood.fondo,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",
    paddingTop: "1em",
    paddingBottom: "1em",

});

const ImagenNosotros = styled ("img") ({


});


function Nosotros () {

    return (

        <ContenedorPaginaNosotros>


            <TextoNosotros>Nuestra Historia - Vision y Mision</TextoNosotros>
            <TextoNosotros>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus perspiciatis, magni molestiae id necessitatibus quos exercitationem quis a sunt odit officiis! Nesciunt aperiam numquam minima laboriosam earum eaque totam.</TextoNosotros>
            <Button sx={{fontFamily: "KittyKatt", fontSize: "15px", fontWeight: "bold", marginBottom: "17px",}} variant="outlined" color='error'>Volver al Home</Button>
            {/* <ImagenNosotros src='https://creativereview.imgix.net/content/uploads/2012/02/4oclock_01.jpg'></ImagenNosotros> */}

        </ContenedorPaginaNosotros>

    )

}

export default Nosotros;