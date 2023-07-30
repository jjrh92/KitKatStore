import { useContext } from "react";
import { Button } from "@mui/material";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import { ColoresJulioFood } from "../../Colores";
import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import "../Cart/CartWidget.css";
import { cartContext } from "../../context/CartContext";

const WidgetContainer = styled ("div") ({


    display: "flex",
    flexDirection: "row",
    alignItems: "center",

});

const TextoCantidad = styled ("span") ({

    color: ColoresJulioFood.textos,
    fontSize: "1rem",
    fontFamily: "KittyKatt",
    display: "flex",
    justifyContent: "center",
    userSelect: "none",

});

function CartWidget () {

  const context = useContext (cartContext);

  return (

    <WidgetContainer>

        <Link draggable="false" style={{fontSize: "20px", color: ColoresJulioFood.textos, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px", display: "flex", flexDirection: "column"}} to={"/cart"}>

        <Button sx={{color: "#F7F0F0",}}><ShoppingCartCheckoutRoundedIcon className="Cart" sx={{fontSize: "4.3125rem"}}/></Button>



        </Link>

        <TextoCantidad>

        {context.getTotalItemsInCart()}

        </TextoCantidad>

    </WidgetContainer>


  );

}

export default CartWidget;