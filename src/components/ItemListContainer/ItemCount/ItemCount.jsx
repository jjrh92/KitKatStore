import { useState, useContext } from "react";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { cartContext } from "../../../App";

const ContenedorBotones = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    
});

const ItemCount = (props) => {

    const { title, stock, price, id } = props;

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

        if (Quantity <= 1) {

            setQuantity (PreviousQuantity => PreviousQuantity = 1)
            
        }

        else {

            setQuantity (PreviousQuantity => PreviousQuantity - 1);

        }

    }

    const [Quantity, setQuantity] = useState (1);

    const { addToCart } = useContext (cartContext);
    
    function handleAddToCart () {

        function MultiplicarCarrito (a,b) {

            return a * b;

        }

        let CalcularTotalAgregado = MultiplicarCarrito (Quantity,price);
        
        if (Quantity <= 0) {

            alert ("Carrito vacio, agrega un producto antes de usar el boton.")

        }

        else {

            alert (`Agregaste (${Quantity}) unidades (${title}) al carrito.`);

            addToCart (title, price, Quantity, id);

        }


    };

    return (

        <ContenedorBotones>
            <IconButton variant="text" sx={{cursor:"unset", color: "#EC2227",}} title="Sumar Cantidad" onClick={onAdd} rel="noopener noreferrer">

                <AddIcon />

            </IconButton>

            <IconButton onClick={handleAddToCart} sx={{cursor:"unset", color: "#EC2227",}} title="Agregar al carrito"rel="noopener noreferrer">{Quantity}<AddShoppingCartIcon />
            </IconButton>

            <IconButton variant="text" sx={{cursor:"unset", color: "#EC2227",}} title="Restar Cantidad" onClick={onSubtract} rel="noopener noreferrer">

                <RemoveIcon />

            </IconButton>


        </ContenedorBotones>
        

    );

}

export default ItemCount;