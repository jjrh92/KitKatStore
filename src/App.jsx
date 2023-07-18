import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/404/404'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import Contacto from './components/Contacto/Contacto'
import Nosotros from './components/Nosotros/Nosotros'
import { usePleaseStay } from 'react-use-please-stay'

import './reset.css'

function App() {

  usePleaseStay({

    titles: [

      "Kilo & Kilo",
      "jjrh92.dev",
      "Postres exoticos a la puerta de tu casa",
      "43305 React",

    ],

    interval: 1500,
    animationType: Animation.LOOP,

    faviconURIs: [

      "https://img.icons8.com/external-colours-bomsymbols-/91/external-chocolate-matcha-green-tea-colours-bomsymbols-.png",
      "https://img.icons8.com/office/80/chocolate-bar.png",

    ],

    alwaysRunAnimations: true

  })

  return (


    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Banner/><ItemListContainer/></>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer /> 
    </BrowserRouter>

  )
  
}

export default App