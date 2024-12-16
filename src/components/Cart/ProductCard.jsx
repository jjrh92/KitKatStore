/* eslint-disable react/prop-types */
import { styled } from "@mui/system";
import { ColoresJulioFood } from "../../Colores";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ContenedorProducts = styled("div")({
  display: "flex",
  backgroundColor: ColoresJulioFood.fondo,
  padding: "1rem",
  margin: "1rem",
  width: "500px",
  userSelect: "none",
  border: "2px solid",
  borderColor: ColoresJulioFood.hover,
  borderRadius: "10px",
});

const ContenedorTexts = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  width: "100vh",
  marginLeft: "5px",
});

const ImagenProducts = styled("img")({
  height: "200px",
  width: "200px",
  border: "2px solid",
  borderColor: ColoresJulioFood.hover,
  borderRadius: "10px",
  marginRight: "5px",
});

const TituloProducto = styled("h1")({
  color: ColoresJulioFood.textos,
  fontSize: "20px",
  fontWeight: "bold",
  fontFamily: "KittyKatt",
});

const SubTituloProducto = styled("h2")({
  color: ColoresJulioFood.textos,
  fontSize: "15px",
  fontWeight: "bold",
  fontFamily: "KittyKatt",
});

const ContenedorButtons = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "end",
  marginLeft: "5px",
});

function ProductCard(props) {
  function CalcularSubtotal(a, b) {
    return a * b;
  }

  return (
    <ContenedorProducts>
      <ImagenProducts draggable="false" src={props.img} />
      <ContenedorTexts>
        <TituloProducto>{props.title}</TituloProducto>
        <SubTituloProducto>{props.description}</SubTituloProducto>
        <SubTituloProducto>In Cart: {props.count} units.</SubTituloProducto>
        <SubTituloProducto>Price c/u: ${props.price} usd.</SubTituloProducto>
        <SubTituloProducto>Stock: {props.stock} units.</SubTituloProducto>
        <SubTituloProducto>
          SubTotal: ${CalcularSubtotal(props.count, props.price)} usd.
        </SubTituloProducto>
      </ContenedorTexts>

      <ContenedorButtons>
        <IconButton
          onClick={props.agregar}
          title={"Add more of the same product to the cart"}
          variant="text"
          sx={{ cursor: "unset", color: "#F7F0F0" }}
        >
          <AddShoppingCartIcon sx={{ fontSize: "4rem" }} />
        </IconButton>

        <IconButton
          onClick={props.eliminar}
          title={"Detele this product from the cart"}
          variant="text"
          sx={{ cursor: "unset", color: "#F7F0F0" }}
        >
          <DeleteForeverIcon sx={{ fontSize: "4rem" }} />
        </IconButton>
      </ContenedorButtons>
    </ContenedorProducts>
  );
}

export default ProductCard;
