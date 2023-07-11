import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import { usePleaseStay } from 'react-use-please-stay'
import './reset.css'

function App() {

  usePleaseStay({

    titles: [

      "Kilo & Kilo",
      "jjrh92.dev",
      "Los KitKats más exoticos",
      "43305 React",

    ],

    interval: 1500,
    animationType: Animation.LOOP,

    faviconURIs: [

      "https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/external-chocolate-love-moment-photo3ideastudio-lineal-color-photo3ideastudio.png",
      "https://img.icons8.com/external-colours-bomsymbols-/91/external-chocolate-matcha-green-tea-colours-bomsymbols-.png",
      "https://img.icons8.com/dotty/80/developer.png",
      "https://img.icons8.com/office/80/chocolate-bar.png",

    ],

    alwaysRunAnimations: true

  })

  return (

    <div className='app'>

      <Navbar />
      <Banner />
      <ItemListContainer/>
      <Footer />
        
    </div>

  )
  
}

export default App