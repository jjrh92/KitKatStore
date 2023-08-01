import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/asyncMock";
import { Link, useParams } from "react-router-dom";
import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import ItemCount from "../ItemListContainer/ItemCount/ItemCount";
import { CartContext } from './components/Context/cartContext'

const ContenedorPadre = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
    backgroundColor: "white",
    
});

const ContenedorHijo = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
});

const TextoProducto = styled ("h1") ({

    textAlign: "center",
    color: ColoresJulioFood.fondo,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",
    paddingTop: "1em",
    paddingBottom: "1em",

});

const ImagenProducto = styled ("img") ({

  userSelect: "none",
  width: "60%",
  height: "60%",
    
    
});

function ItemDetailContainer () {

  const [product, setProduct] = useState ({});
  const { id } = useParams();

  const { addToCart } = useContext (CartContext);

  useEffect(() => {

    async function requestProduct () {

      const respuesta = await getProductData (id);
      setProduct (respuesta);

    }

    requestProduct ();

  }, [id]);

  function handleAddToCart (clickCount) {

    addToCart (product, clickCount);
    alert (`Producto agregado al carrito, cantidad: ${clickCount}`);
    console.log ("Producto agregado:" ,product, "\nCantidad:" ,clickCount)

  }

  return (

    <ContenedorPadre>

        <ContenedorHijo>
            <TextoProducto>Viendo vista detallada del Producto: {product.title}</TextoProducto>
            <ImagenProducto draggable="false" src={product.img} alt="Imagen" />
        </ContenedorHijo>

        <ContenedorHijo>
            <TextoProducto>{product.description} | Precio ${product.price} usd.</TextoProducto>
            <ItemCount stock={product.stock} onConfirm={handleAddToCart} /> 
            {/* Aca ocurre la magia */}
        </ContenedorHijo>

        <TextoProducto>Stock Disponible: {product.stock} unidades.</TextoProducto>

        <Link draggable="false" style={{fontSize: "30px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px",}} to={"/cart"}>Terminar mi Compra<ShoppingCartCheckoutRoundedIcon className="Cart"/></Link>

        <Link draggable="false" style={{fontSize: "20px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px",}} to={"/"}>Volver al Home</Link>

    </ContenedorPadre>

  );
}

export default ItemDetailContainer;