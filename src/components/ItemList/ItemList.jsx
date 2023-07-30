import { useState, useEffect } from "react";
import { styled } from '@mui/system';
import { ColoresJulioFood } from "../../Colores";
import getData, {getCategoryData} from "../../services/asyncMock";
import Item from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import Loader from "./Loader";


const ContenedorCategoria = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "2rem",
    backgroundColor: ColoresJulioFood.fondo,

});

const ContenedorProductos = styled ("section") ({

    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    gap: "5px",
    width: "100%",

});

const H1Encabezado = styled ("h1") ({

    color: "whitesmoke",
    fontWeight: "bold",
    fontFamily: "KittyKatt",
    fontSize: "28px",
    paddingBottom: "10px",
    userSelect: "none",
    
});

const ItemList = (props) => {

    const { products } = props;
   
    return (

        <ContenedorCategoria>
            <H1Encabezado>Catalogo de Productos Disponibles - Precios en Dolares (USD).</H1Encabezado>
            <ContenedorProductos>
                <ContenedorProductos>
                    {products.map ( (item) => <Item key={item.id} {...item} />) }
                </ContenedorProductos>
            </ContenedorProductos>
        </ContenedorCategoria>

    );

};

export default ItemList;