import { useState, createContext } from "react";
const cartContext = createContext ({ cart: [] });

function CartContextProvider (props) {

  const [cart, setCart] = useState([]);

  function addToCart (product, count) {

    const newCart = cart.map((item) => item);
    const newItemInCart = { count, ...product };
    newCart.push(newItemInCart);
    setCart (newCart);

  }

  function removeItem (id) {
    //
    return null;
  }

  function clearCart () {

    window.location.href='/';
    alert ("Tu carrito ha sido limpiado correctamente.");
    
  }

  function getTotalItemsInCart () {

    let total = 0;

    cart.forEach((item) => {

      total += item.count;

    });

    return total;

  }

  function getTotalPriceInCart () {

    let total = 0;

    cart.forEach((item) => {

      total += item.count * item.price;

    });

    return total;

  }

  function getItemTitleInCart () {

    let nombre;

    cart.forEach((item) => {

      nombre = item.title;

    });

    return nombre;

  }

  function getItem (id) {

    return cart [0];

  }

  return (

    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
        getItemTitleInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>

  );
  
}

export { cartContext, CartContextProvider };