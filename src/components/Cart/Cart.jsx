/* eslint-disable react/prop-types */
import { styled } from "@mui/system";
import { ColoresJulioFood } from "../../Colores";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { IconButton } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { CartContext } from "../../Context";
import { createOrder } from "../../services/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ContenedorPaginaCart = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  userSelect: "none",
  backgroundColor: ColoresJulioFood.textos,
  height: "100%",
});

const TextoCart = styled("h1")({
  color: ColoresJulioFood.fondo,
  fontSize: "24px",
  fontWeight: "bold",
  fontFamily: "KittyKatt",
  paddingTop: "1em",
  paddingBottom: "1em",
});

const ContenedorButtons = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "end",
  gap: "70px",
});

const ImagenError = styled("img")({
  marginTop: "30px",
  width: "400px",
  height: "400px",
});

function Cart() {
  const AlertaDulce = withReactContent(Swal);
  const context = useContext(CartContext);
  let ItemsEnCarrito = context.cart;

  const { cart, clearCartQuietly } = useContext(CartContext);

  async function handleCheckout() {
    let { value: compradorNombre } = await Swal.fire({
      title: "Ingrese su nombre",
      input: "text",
      inputLabel: "Su Nombre para la factura",
      inputPlaceholder: "Julio Reyes",
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      preConfirm: (compradorNombre) => {
        if (!compradorNombre || compradorNombre.trim() === "") {
          Swal.showValidationMessage("El campo nombre no puede estar vacio.");
        }
      },
    });

    let { value: compradorEmail } = await Swal.fire({
      title: "Enter your email address",
      input: "email",
      inputLabel: "Su Email",
      inputPlaceholder: "youremail@hotmail.com",
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
    });

    let { value: compradorTelefono } = await Swal.fire({
      title: "Enter your phone number",
      input: "tel",
      inputLabel: "Your phone number",
      inputPlaceholder: "+34777777777",
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      preConfirm: (compradorTelefono) => {
        if (!compradorTelefono || compradorTelefono.trim() === "") {
          Swal.showValidationMessage("Phone field cannot be empty.");
        }
      },
    });

    const orderData = {
      items: cart,
      buyer: {
        name: compradorNombre,
        email: compradorEmail,
        phone: compradorTelefono,
      },
      date: new Date(),
      total: context.getTotalPriceInCart(),
    };

    const idOrder = await createOrder(orderData);

    AlertaDulce.fire({
      position: "center",
      icon: "success",
      iconColor: "yellowgreen",
      color: "yellowgreen",
      background: "#F7F0F0",
      confirmButtonColor: "yellowgreen",
      title: `Dear ${orderData.buyer.name}, your order number is ${idOrder} for an ammount of $${orderData.total}usd.\nTo your email ${orderData.buyer.email} We have sent all the details.\nThank you for your purchase and to your phone ${orderData.buyer.phone} we'll send shipping status updates very soon.\nHave a nice day.`,
      confirmButtonText: "Ok 🍫",
      showConfirmButton: true,
      allowEnterKey: true,
      allowEscapeKey: false,
      backdrop: `
            rgba(0,0,123,0.4)
            left top
            no-repeat
            `,
    });

    clearCartQuietly();
  }

  function CalcularDelivery() {
    let deliveryFee = 7;

    if (context.getTotalPriceInCart() > 30) {
      return (
        <TextoCart sx={{ color: ColoresJulioFood.hover }}>
          Final Value (Cart): (Delivery Gratis) = $
          {context.getTotalPriceInCart()} usd.
        </TextoCart>
      );
    } else {
      return (
        <TextoCart>
          Final Value (Cart): *Delivery +$7usd* = $
          {context.getTotalPriceInCart() + deliveryFee} usd.
        </TextoCart>
      );
    }
  }

  if (context.getTotalItemsInCart() === 0) {
    return (
      <ContenedorPaginaCart>
        <TextoCart>Your shopping cart is empty.</TextoCart>
        <ImagenError
          draggable="false"
          src="https://www.adasglobal.com/img/empty-cart.png"
        />
        <Link
          draggable="false"
          style={{
            fontSize: "30px",
            color: ColoresJulioFood.hover,
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "KittyKatt",
            paddingBottom: "20px",
            paddingTop: "20px",
          }}
          to={"/"}
        >
          Go back to the cart
        </Link>
      </ContenedorPaginaCart>
    );
  } else {
    return (
      <ContenedorPaginaCart>
        <TextoCart>
          Cart quantity of items: {context.getTotalItemsInCart()}
        </TextoCart>

        {ItemsEnCarrito.map((props) => {
          return (
            <ProductCard
              stock={props.stock}
              key={props.id}
              id={props.id}
              img={props.img}
              title={props.title}
              description={props.description}
              count={props.count}
              price={props.price}
              eliminar={() => context.removeFromCart(props.id)}
              agregar={() => context.addToCart(props, 1, props.stock)}
            />
          );
        })}

        <div>{CalcularDelivery()}</div>

        <ContenedorButtons>
          <IconButton
            onClick={handleCheckout}
            variant="text"
            sx={{ color: "purple" }}
            title="Process Shopping Cart"
          >
            <TextoCart sx={{ color: "purple" }}>
              Process Shopping Cart:
            </TextoCart>
            <LocalShippingIcon sx={{ fontSize: "40px" }} />
          </IconButton>

          <IconButton
            onClick={context.clearCart}
            variant="text"
            sx={{ color: ColoresJulioFood.fondo }}
            title="Delete all products from the cart"
          >
            <TextoCart>Delete All:</TextoCart>
            <BackspaceIcon />
          </IconButton>
        </ContenedorButtons>

        <Link
          draggable="false"
          style={{
            fontSize: "30px",
            color: ColoresJulioFood.hover,
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "KittyKatt",
            paddingBottom: "20px",
            paddingTop: "20px",
          }}
          to={"/"}
        >
          Go back to the homepage
        </Link>
      </ContenedorPaginaCart>
    );
  }
}

export default Cart;
