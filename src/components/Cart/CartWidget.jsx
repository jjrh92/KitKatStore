import React from "react";
import { Button } from "@mui/material";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import { ColoresJulioFood } from "../../Colores";
import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import "../Cart/CartWidget.css";

const TextoCantidad = styled ("span") ({

    color: ColoresJulioFood.textos,
    fontSize: "3.3125rem",
    fontFamily: "KittyKatt",

});

const CartWidget = (props) => {
        
    return (

        <Link draggable="false" style={{fontSize: "20px", color: ColoresJulioFood.textos, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px",}} to={"/Cart"}>

        <ShoppingCartCheckoutRoundedIcon className="Cart" sx={{fontSize: "4.3125rem"}}/>

        <TextoCantidad title="Cantidad de items en el carrito" className="Cart">

        {props.Quantity}

        </TextoCantidad>

        </Link>

    );

};

export default CartWidget;