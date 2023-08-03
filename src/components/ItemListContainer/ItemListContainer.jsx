import { useState, useEffect } from "react";
import getData, {getCategoryData} from "../../services/asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../ItemList/Loader";
import "./ItemListContainer.css";

const ItemListContainer = () => {

    const [products, setProducts] = useState ([]);
    const { categoryId } = useParams ();
    const [loaded, setLoaded] = useState (false);

    useEffect (() => {


        async function requestProducts () {

            setLoaded (false);
            let respuesta = categoryId ? await getCategoryData (categoryId) : await getData ();
            setProducts (respuesta);
            setLoaded (true);
    
        }

        requestProducts ();
    
    }, [categoryId]);

    if (!loaded) return <Loader />
    return <ItemList products={products}/>

}

export default ItemListContainer;