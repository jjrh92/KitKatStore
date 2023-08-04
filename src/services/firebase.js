// 1. Inicio Firestore
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

// 2. Implementar async function getData;

async function getData () {

  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs (productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map (item => { return { ...item.data(), id: item.id }}
  
  // {
  // let productFullData = item.data();
  // productFullData.id = item.id;
  // return productFullData;
  // }

  );

  return (docsData);

}


export { getData };

// 3. Implementar getProductData
// 4. Implementar getCaterogyData

// Fin Firestore