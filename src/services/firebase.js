// 1. Inicio Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, where, query } from 'firebase/firestore'

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

  const productsRef = collection (db, "products");
  const documentsSnapshot = await getDocs (productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map (item => { return { ...item.data(), id: item.id }});
  return (docsData);

}

// 3. Implementar getProductData

async function getProductData (id) {

    const docRef = doc (db, "products", id);
    const docSnapshot = await getDoc (docRef);

    if (docSnapshot.exists()) {

        return {...docSnapshot.data(), id: docSnapshot.id};

    }

    else {

        throw new Error ("No se encontró tal producto.");

    }


}


// 4. Implementar getCaterogyData

async function getCategoryData (id) {

    const productsRef = collection (db, "products");
    const q = query (productsRef, where ("category", "==", id));

    const documentsSnapshot = await getDocs (q);
    const documents = documentsSnapshot.docs;
    const docsData = documents.map (item => { return { ...item.data(), id: item.id }});
    return (docsData);


}

export { getData, getProductData, getCategoryData };