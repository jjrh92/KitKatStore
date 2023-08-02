import { useState, createContext } from "react";
const CartContext = createContext ({ cart: [] });

function CartContextProvider (props) {

  const [cart, setCart] = useState([]);

  function addToCart (product, count) {

    // Revisando si el producto ya existe en el carrito (de antes)

    const existingItemIndex = cart.findIndex(

      (item) => item.id === product.id

    );
  
    if (existingItemIndex !== -1) {

      // Si existe el producto de antes, actualiza la cantidad) 
      const newCart = cart.map ((item, index) => {

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
  
      setCart (newCart);

    } 
    
    else {

      // El Producto no existe en el carrito, agregalo como un nuevo item. 
      const newItemInCart = { count, ...product };
      const newCart = [...cart, newItemInCart];
      setCart (newCart);

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

  // function modifyQuantity (id, count, stock) {
    
  //   const newCart = cart.map ((item, index) => {

  //     if (index !== id) {

  //       let newCount = prompt ("Modificar cantidad")

  //       return {

  //         ...item,
  //         count: item.count + count,

  //       };

  //     } 
      

  //   });

  //   setCart (newCart);



  // }
  
  function getItemId (id) {
    
    let returnedID;
    return returnedID = console.log ("Has clickeado el producto con el id "+id);

  }

  function removeFromCart (id) {

    setCart((cart) =>

        cart.map(item => item.id === id ?
            ({
                ...item,
                qty: item.qty - 1
            }) :
            item
        ).filter(item => {
            return item.id === id ?
                item.qty > 0 :
                true
        })
    );

    alert ("Se han eliminado del carrito los items solicitados.")

  }

  function addFromCart (idPasado) {

    const count = cart.findIndex (item => item.id === idPasado);

    if (count !== -1) {

      cart[count].count++;
      getTotalItemsInCart(count)

    }

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        addFromCart,
        clearCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
        getItemTitleInCart,
        getItemId,
      }}
    >
      {props.children}
    </CartContext.Provider>

  );
  
}

export { CartContext, CartContextProvider };