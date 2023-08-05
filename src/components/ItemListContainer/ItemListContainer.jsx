import { useState, useEffect } from "react";
import { getData, getCategoryData} from "../../services/firebase";
import { useParams, useNavigate } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../ItemList/Loader";
import "./ItemListContainer.css";

const ItemListContainer = () => {

    const [products, setProducts] = useState ([]);
    const { categoryId } = useParams ();
    const [loaded, setLoaded] = useState (false);
    const navigate = useNavigate ();

    useEffect (() => {

        async function requestProducts () {

            setLoaded (false);
            let respuesta = categoryId ? await getCategoryData (categoryId) : await getData ();
            setProducts (respuesta);
            setLoaded (true);
    
        }

        try {

            requestProducts ();

        }

        catch (error) {

            alert (`Error: ${error.message}`);

        }

        finally {

            setLoaded (true);

        }
    
    }, [categoryId]);

    if (!loaded) return <Loader />
    return <ItemList products={products}/>

}

export default ItemListContainer;