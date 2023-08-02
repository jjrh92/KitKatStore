import { useState, createContext } from "react";
const CartContext = createContext ({ cart: [] });

function CartContextProvider (props) {

  const [cart, setCart] = useState([]);

  function addToCart(product, count) {

    // Revisando si el producto ya existe en el carrito (de antes)

    const existingItemIndex = cart.findIndex(

      (item) => item.id === product.id

    );
  
    if (existingItemIndex !== -1) {

      // Si existe el producto de antes, actualiza la cantidad) 
      const newCart = cart.map((item, index) => {

        if (index === existingItemIndex) {
          return {
            ...item,
            count: item.count + count,
          };
        } 
        
        else {
          return item;

        }

      });
  
      setCart(newCart);

    } 
    
    else {

      // El Producto no existe en el carrito, agregalo como un nuevo item. 
      const newItemInCart = { count, ...product };
      const newCart = [...cart, newItemInCart];
      setCart(newCart);

    }
    
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

  
  function removeItem (id) {



  }

  return (

    <CartContext.Provider
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
    </CartContext.Provider>

  );
  
}

export { CartContext, CartContextProvider };