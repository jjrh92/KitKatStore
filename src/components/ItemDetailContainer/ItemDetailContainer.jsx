import { useState, useEffect } from "react";
import {getProductData} from "../../services/asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer () {

    const [product, setProduct] = useState ({});

    const{ id } = useParams ();

    async function requestProduct () {

        const respuesta = await getProductData (id);
        setProduct (respuesta);

    }

    useEffect ( () => {

        requestProduct ();

    }, []);

    return (

        <ItemDetail product={product}/>

    );

    

}

export default ItemDetailContainer;