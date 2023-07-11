import { styled } from '@mui/system';
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';
import { ColoresJulioFood } from '../../Colores';

const ContenedorItem = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    border: "2px solid",
    borderColor: ColoresJulioFood.hover,
    borderRadius: "10px",
    backgroundColor: "white",
    userSelect: "none",
    width: "25rem",
    marginBottom: "3px",

});

const ContenedorTextos = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px",

});

const ContenedorImagen = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

});

const TituloProducto = styled ("h1") ({

    color: ColoresJulioFood.fondo,
    fontSize: "13px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",

});

const SubTituloProducto = styled ("p") ({

    borderColor: ColoresJulioFood.textos,
    color: ColoresJulioFood.fondo,
    fontSize: "12px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",

});

const StockProducto = styled ("span") ({

    borderColor: ColoresJulioFood.textos,
    color: ColoresJulioFood.fondo,
    fontSize: "12px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",

});

const PrecioProducto = styled ("span") ({

    color: ColoresJulioFood.fondo,
    fontSize: "12px",
    fontWeight: "bold",
    fontFamily: "KittyKatt",

});

const ImagenProducto = styled ("img") ({

    width: "200px",
    height: "200px",

});

function Item (props) {

    const { id, title, description, stock, price, img } = props;

    return (

        <ContenedorItem key={id} title={title}>

            <ContenedorTextos>
                <TituloProducto>{title}</TituloProducto>
                <SubTituloProducto>{description}</SubTituloProducto>
                <StockProducto>Stock: {stock}.</StockProducto>
                <PrecioProducto>Precio: ${price}.</PrecioProducto>
            </ContenedorTextos>

            <ContenedorImagen>
                <ImagenProducto draggable="false" src={img} alt={title} />
            </ContenedorImagen>
            <ItemCount stock={stock} />
        </ContenedorItem>

    );

};

export default Item;