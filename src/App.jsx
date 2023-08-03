import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/404/404'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Contacto from './components/Contacto/Contacto';
import { CartContextProvider } from './Context'
import './reset.css'

// Inicio Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC3Zmzh5oSaGK8fgh_fWaRQqUUuhHHtEqc",
  authDomain: "kitkatscript-f686a.firebaseapp.com",
  projectId: "kitkatscript-f686a",
  storageBucket: "kitkatscript-f686a.appspot.com",
  messagingSenderId: "19613731408",
  appId: "1:19613731408:web:d4e77d5afcc08ffe3ddf55"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

// Implementar getData 
// Implementar getProductData 
// Implementar getCategoryData

const productsRef = collection (db, "products");
const documentsSnapshot = await getDocs (productsRef);
console.log (documentsSnapshot);


// Fin Firestore

function App() {

  return (

    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/><ItemListContainer/></>} />
          <Route path="/category/:categoryId" element={<><Banner/><ItemListContainer/></>} />
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>      
        <Footer /> 
      </BrowserRouter>
    </CartContextProvider>

  )
  
}

export default App;