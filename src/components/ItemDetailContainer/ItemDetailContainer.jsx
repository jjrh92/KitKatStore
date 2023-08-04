import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import ItemCount from "../ItemListContainer/ItemCount/ItemCount";
import { CartContext } from "../../Context";
import Loader from "../ItemList/Loader";

const ContenedorPadre = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
    backgroundColor: "#F7F0F0",
    
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
  width: "40%",
  height: "40%",
    
    
});

function ItemDetailContainer () {

  const [product, setProduct] = useState ({});
  const [isAddedToCart, setIsAddedToCart] = useState (false);
  const { id } = useParams();
  const [loaded, setLoaded] = useState (false);

  const { addToCart } = useContext (CartContext);

  useEffect(() => {

    async function requestProduct () {
      
      setLoaded (false);
      const respuesta = await getProductData (id);
      setProduct (respuesta);
      setLoaded (true);

    }


    requestProduct ();

  }, [id]);

  if (!loaded) return <Loader />

  function handleAddToCart (clickCount) {

    addToCart (product, clickCount);
    alert (`Producto agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart (true);

  }

  return (

    <ContenedorPadre>

        <ContenedorHijo>
            <TextoProducto>Viendo vista detallada del Producto: {product.title}</TextoProducto>
            <ImagenProducto draggable="false" src={product.img} alt="Imagen" />
        </ContenedorHijo>

        <ContenedorHijo>
            <TextoProducto>{product.description} | Precio ${product.price} usd.</TextoProducto>
            {
              isAddedToCart ? <Link draggable="false" style={{fontSize: "30px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px",}} to={"/cart"}>Ir al Carrito<ShoppingCartCheckoutRoundedIcon sx={{fontSize: "50px",}} className="Cart"/></Link> : <ItemCount stock={product.stock} onConfirm={handleAddToCart} /> 
            }

            {/* Aca ocurre la magia */}
        </ContenedorHijo>

        <TextoProducto>Stock Disponible: {product.stock} unidades.</TextoProducto>

        {/* <Link draggable="false" style={{fontSize: "30px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px",}} to={"/cart"}>Ir al Carrito<ShoppingCartCheckoutRoundedIcon className="Cart"/></Link> */}

        <Link draggable="false" style={{fontSize: "20px", color: ColoresJulioFood.hover, textDecoration: "none", fontWeight: "bold", fontFamily: "KittyKatt", paddingBottom: "15px",}} to={"/"}>Volver al Home</Link>

    </ContenedorPadre>

  );
}

export default ItemDetailContainer;