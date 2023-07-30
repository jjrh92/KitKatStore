import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from "../../context/cartContext";

const ContenedorPaginaCart = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
    backgroundColor: ColoresJulioFood.textos,
    height: "100vh",
    
});

const TextoCart = styled ("h1") ({

    textAlign: "center",
    color: ColoresJulioFood.fondo,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",
    paddingTop: "1em",
    paddingBottom: "1em",

});


function Cart () {

    const context = useContext (cartContext);
    console.log (context.cart) 
    // Ojo con este objeto mañana

    return (

        <ContenedorPaginaCart>

            <TextoCart>Listado de Productos en Carrito</TextoCart>

            <TextoCart>Cantidad de Productos en Carrito: {context.getTotalItemsInCart()}</TextoCart>



            <Link draggable="false" style={{fontSize: "20px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px",}} to={"/"}>Volver al Home</Link>

        </ContenedorPaginaCart>

    )

}

export default Cart;