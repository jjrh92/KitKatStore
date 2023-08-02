import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductCard from './ProductCard';
import { IconButton } from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { CartContext } from "../../Context";

const ContenedorPaginaCart = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
    backgroundColor: ColoresJulioFood.textos,
    height: "100%",
    
});

const TextoCart = styled ("h1") ({

    color: ColoresJulioFood.fondo,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",
    paddingTop: "1em",
    paddingBottom: "1em",


});

const ContenedorButtons = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "end",
    gap: "50px",
    width: "100vh",
    marginLeft: "5px",
  
  });


function Cart () {

    const context = useContext (CartContext);

    let ItemsEnCarrito = context.cart;  

    function CalcularDelivery () {

        let deliveryFee = 7;

        if (context.getTotalPriceInCart() > 30) {

            return <TextoCart>Valor Final Carrito: (Delivery Gratis) = ${context.getTotalPriceInCart()} usd.</TextoCart>

        }

        else {

            return <TextoCart>Valor Final Carrito: (+Delivery $7usd) = ${context.getTotalPriceInCart() + deliveryFee} usd.</TextoCart>


        }


    }

    function TerminarCompra () {

        let cantidadItems = context.getTotalItemsInCart ();
        let nombresItems = context.getItemTitleInCart ();

        alert ("Despachamos: x"+cantidadItems+ " (" +nombresItems+").\nGracias por tu compra.\nVolviendo al Indice");
        window.location.href='/';

    }



    if (context.getTotalItemsInCart() === 0) {

        alert ("No hay nada en tu carrito para mostrar.");
        
    }
    
    else {

        return (

            <ContenedorPaginaCart>

                <TextoCart>Cantidad de Productos en Carrito: {context.getTotalItemsInCart()}</TextoCart>


                {ItemsEnCarrito.map ((props) => {       
                                    
                    return <ProductCard key={props.id} id={props.id} img={props.img} title={props.title} description={props.description} count={props.count} price={props.price} eliminar={() => context.removeFromCart(props.id)} agregar={() => context.addFromCart(props.id)}/>
        
                })}

                <div>{CalcularDelivery()}</div>


                <ContenedorButtons>

                    <IconButton onClick={TerminarCompra} variant="text" sx={{cursor:"unset", color: ColoresJulioFood.hover,}} title="Procesar Compra">
                        <TextoCart sx={{color: ColoresJulioFood.hover}}>Terminar Compra:</TextoCart>
                        <DoneAllIcon/> 
                    </IconButton>

                    <IconButton onClick={context.clearCart} variant="text" sx={{cursor:"unset", color: ColoresJulioFood.fondo,}} title="Borrar todos los productos del Carrito">
                        <TextoCart>Borrar Todo:</TextoCart>
                        <BackspaceIcon/> 
                    </IconButton>

                </ContenedorButtons>

                <Link draggable="false" style={{fontSize: "30px", color: ColoresJulioFood.fondo, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "20px", paddingTop: "20px",}} to={"/"}>Volver al Catalogo</Link>

            </ContenedorPaginaCart>

        )

    }

}

export default Cart;