import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import { usePleaseStay } from 'react-use-please-stay'
import './reset.css'

function App() {

  usePleaseStay({

    titles: [

      "Mejor Vendo Empanadas",
      "Comisión 43305 React",

    ],

    interval: 1500,
    animationType: Animation.LOOP,

    faviconURIs: [

      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-empanada-street-food-flaticons-lineal-color-flat-icons-2.png",
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-empanada-street-food-flaticons-lineal-color-flat-icons.png",

    ],

    alwaysRunAnimations: true

  })

  return (

    <div className='app'>

      <Navbar />
      <ItemListContainer greeting="Bienvenido....Va un saludo a quien corrige esta entrega"/>
      <Footer />
        
    </div>

  )
  
}

export default App