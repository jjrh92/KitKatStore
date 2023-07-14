import React from "react";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ContenedorBotones = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    
});

const ItemCount = (props) => {

    const { stock } = props;

    function onAdd () {

        if (Quantity >= stock) {

            setQuantity (PreviousQuantity => PreviousQuantity = PreviousQuantity)
            alert ("Si deseas agregar más de "+ stock +" productos por favor contacta al admin.\nGracias.");
            
        }

        else {

            setQuantity (PreviousQuantity => PreviousQuantity + 1)

        }
    
    }

    function onSubtract () {

        if (Quantity <= 0) {

            setQuantity (PreviousQuantity => PreviousQuantity = 0)
            console.log ("Cheat Code Activated!🤖\nIntentaste restar a 0 lo cual no esta permitido!\nEl admin te debe un 🍫KitKat Exotico.");
            
        }

        else {

            setQuantity (PreviousQuantity => PreviousQuantity - 1)

        }

    }

    const [Quantity, setQuantity] = useState(0);

    return (

        <ContenedorBotones>
            <IconButton variant="text" sx={{cursor:"unset", color: "#EC2227",}} title="Sumar Cantidad" onClick={onAdd} rel="noopener noreferrer">

                <AddIcon />

            </IconButton>

            <IconButton sx={{cursor:"unset", color: "#EC2227",}} title="Agregar al carrito"rel="noopener noreferrer">{Quantity}<AddShoppingCartIcon />
            </IconButton>

            <IconButton variant="text" sx={{cursor:"unset", color: "#EC2227",}} title="Restar Cantidad" onClick={onSubtract} rel="noopener noreferrer">

                <RemoveIcon />

            </IconButton>


        </ContenedorBotones>
        

    );

}

export default ItemCount;