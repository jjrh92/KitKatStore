import React from "react";
import { Button } from "@mui/material";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import { ColoresJulioFood } from "../../Colores";
import { styled } from '@mui/system';
import "../Cart/CartWidget.css";
import '../../Hover.css'

const TextoCantidad = styled ("span") ({

    color: ColoresJulioFood.textos,
    fontSize: "3.3125rem",


});

const CartWidget = (props) => {
        
    return (

    <Button className="Cart hvr-rotate" variant="text" color="error" title="CheckOut" href="" target="_blank" rel="noopener noreferrer" sx={{color: ColoresJulioFood.textos}}>

        <ShoppingCartCheckoutRoundedIcon className="Cart" sx={{fontSize: "4.3125rem"}}/>

        <TextoCantidad title="Cantidad de items en el carrito" className="Cart">

            {props.Cantidad}

        </TextoCantidad>

    </Button>

    );

};

export default CartWidget;