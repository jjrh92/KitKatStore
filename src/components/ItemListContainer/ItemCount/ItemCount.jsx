import React, { useState } from "react";
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ContenedorBotones = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    
});

function ItemCount (props) {

  const [clickCount, setClickCount] = useState (1);
  const AlertaDulce = withReactContent (Swal);

  function handleClickAdd () {

    if (clickCount === props.stock) {

      AlertaDulce.fire({
        position: 'center',
        icon: 'error',
        title: `Stock number surpassed, if you wish to add more of ${props.stock} units please contact the admin of this page.\nThank You.`,
        showConfirmButton: true,
      })

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
        <IconButton variant="text" sx={{cursor:"unset", color: "#EC2227",}} title="Add Item Quantity" onClick={handleClickAdd}>

            <AddIcon />

        </IconButton>

        <IconButton onClick={() => props.onConfirm(clickCount)} sx={{cursor:"unset", color: "#EC2227",}} title="Agregar al carrito">{clickCount}<AddShoppingCartIcon />
        </IconButton>

        <IconButton variant="text" sx={{cursor:"unset", color: "#EC2227",}} title="Substract Item Quantity" onClick={handleClickSub}>

            <RemoveIcon />

        </IconButton>

    </ContenedorBotones>

  );

}

export default ItemCount;