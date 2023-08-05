import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductCard from './ProductCard';
import { IconButton } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { CartContext } from "../../Context";

const ContenedorPaginaCart = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
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
    gap: "70px",
  
  });

const ImagenError = styled ("img") ({
    
    marginTop: "30px",
    width: "400px",
    height: "400px",
    
});


function Cart () {

    const context = useContext (CartContext);

    let ItemsEnCarrito = context.cart;  

    function CalcularDelivery () {

        let deliveryFee = 7;

        if (context.getTotalPriceInCart() > 30) {

            return <TextoCart sx={{color: ColoresJulioFood.hover}}>Valor Final Carrito: (Delivery Gratis) = ${context.getTotalPriceInCart()} usd.</TextoCart>

        }

        else {
            
            return <TextoCart>Valor Final Carrito: *Delivery +$7usd* = ${context.getTotalPriceInCart() + deliveryFee} usd.</TextoCart>

        }


    }

    function TerminarCompra () {

        let cantidadItems = context.getTotalItemsInCart ();
        let nombresItems = context.getItemTitleInCart ();

        alert ("Despachamos a tu hogar: x"+cantidadItems+ " (" +nombresItems+").\nGracias por su compra.\nVuelva prontos.!");
        window.location.href='/';

    }



    if (context.getTotalItemsInCart() === 0) {

        return <ContenedorPaginaCart><TextoCart>No hay nada en tu carrito para mostrar.</TextoCart><ImagenError draggable="false" src='https://www.adasglobal.com/img/empty-cart.png'/><Link draggable="false" style={{fontSize: "30px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "20px", paddingTop: "20px",}} to={"/"}>Volver al Catalogo</Link></ContenedorPaginaCart>
        
    }
    
    else {

        return (

            <ContenedorPaginaCart>

                <TextoCart>Cantidad de Productos en Carrito: {context.getTotalItemsInCart()}</TextoCart>

                {ItemsEnCarrito.map ((props) => {       
                                    
                    return <ProductCard stock={props.stock} key={props.id} id={props.id} img={props.img} title={props.title} description={props.description} count={props.count} price={props.price} eliminar={() => context.removeFromCart(props.id)} agregar={()=>context.addToCart(props, 1, props.stock)}/>
        
                })}

                <div>{CalcularDelivery()}</div>

                <ContenedorButtons>

                    <IconButton onClick={TerminarCompra} variant="text" sx={{color: "purple",}} title="Procesar Compra">
                        <TextoCart sx={{color: "purple"}}>Procesar Compra:</TextoCart>
                        <LocalShippingIcon sx={{fontSize: "40px",}}/> 
                    </IconButton>

                    <IconButton onClick={context.clearCart} variant="text" sx={{color: ColoresJulioFood.fondo,}} title="Borrar todos los productos del Carrito">
                        <TextoCart>Borrar Todo:</TextoCart>
                        <BackspaceIcon/> 
                    </IconButton>

                </ContenedorButtons>

                <Link draggable="false" style={{fontSize: "30px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "20px", paddingTop: "20px",}} to={"/"}>Volver al Catalogo</Link>

            </ContenedorPaginaCart>

        )

    }

}

export default Cart;