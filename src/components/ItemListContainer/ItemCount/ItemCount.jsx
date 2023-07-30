import React, { useState } from "react";
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";

const ContenedorBotones = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    
});

function ItemCount (props) {

  const [clickCount, setClickCount] = useState (1);

  function handleClickAdd () {

    if (clickCount === props.stock) {

      alert ("Si deseas agregar más de "+ props.stock +" productos por favor contacta al admin.\nGracias.");

    } 
    
    else {

      setClickCount (clickCount + 1);


    }

  }

  function handleClickSub () {

    if (clickCount > 1) {

      setClickCount (clickCount - 1);


    }

  }

  return (


    <ContenedorBotones>
        <IconButton variant="text" sx={{cursor:"unset", color: "#EC2227",}} title="Sumar Cantidad" onClick={handleClickAdd}>

            <AddIcon />

        </IconButton>

        <IconButton onClick={() => props.onConfirm(clickCount)} sx={{cursor:"unset", color: "#EC2227",}} title="Agregar al carrito">{clickCount}<AddShoppingCartIcon />
        </IconButton>

        <IconButton variant="text" sx={{cursor:"unset", color: "#EC2227",}} title="Restar Cantidad" onClick={handleClickSub}>

            <RemoveIcon />

        </IconButton>


    </ContenedorBotones>

  );

}

export default ItemCount;