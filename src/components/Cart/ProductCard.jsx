import React from 'react'
import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ContenedorProducts = styled ("div") ({

  display: "flex",
  backgroundColor: ColoresJulioFood.fondo,
  padding: "1rem",
  margin: "1rem",
  width: "600px",
  userSelect: "none",
  border: "2px solid",
  borderColor: ColoresJulioFood.hover,
  borderRadius: "10px",

});

const ContenedorTexts = styled ("div") ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  width: "100vh",
  marginLeft: "5px",

});

const ImagenProducts = styled ("img") ({

  height: "150px",
  width: "150px",
  border: "2px solid",
  borderColor: ColoresJulioFood.hover,
  borderRadius: "10px",
  marginRight: "5px",

});

const TituloProducto = styled ("h1") ({

  color: ColoresJulioFood.textos,
  fontSize: "20px",
  fontWeight: "bold",
  fontFamily: "KittyKatt",
  
});

const SubTituloProducto = styled ("h2") ({

  color: ColoresJulioFood.textos,
  fontSize: "15px",
  fontWeight: "bold",
  fontFamily: "KittyKatt",
  
});

const ContenedorButtons = styled ("div") ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "end",
  gap: "50px",
  width: "100vh",
  marginLeft: "5px",

});


function ProductCard (props) {

  function CalcularSubtotal (a,b) {

    return a * b;

  } 

  return (

    <ContenedorProducts>

      <ImagenProducts draggable="false" src={props.img}/>
      <ContenedorTexts>
        <TituloProducto>{props.title}</TituloProducto>
        <SubTituloProducto>{props.description}</SubTituloProducto>
        <SubTituloProducto>Cantidad: {props.count} unidades.</SubTituloProducto>
        <SubTituloProducto>Precio c/u: ${props.price} usd.</SubTituloProducto>
        <SubTituloProducto>SubTotal: ${CalcularSubtotal (props.count, props.price)} usd.</SubTituloProducto>
      </ContenedorTexts>

      <ContenedorButtons>

        <IconButton variant="text" sx={{cursor:"unset", color: "#F7F0F0",}} title="Agregar más">
          <AddShoppingCartIcon/>
        </IconButton>

        <IconButton variant="text" sx={{cursor:"unset", color: "#F7F0F0",}} title="Eliminar del Carrito">
          <RemoveShoppingCartIcon />
        </IconButton>

      </ContenedorButtons>

    </ContenedorProducts>

  )

}

export default ProductCard;