import { ProductsData } from "../servicios/product";
import { db } from "./../firebase";
import { collection, addDoc } from "firebase/firestore";

/**
 * @param {String} collectionName Nombre de la colección donde se agregarán los items
 */
export async function createProductsFirestore(products) {
  try {
    // 1. Obtener los productos de la API
    const fetchedProducts = ProductsData;

    if (!Array.isArray(fetchedProducts)) {
      throw new Error("La respuesta de la API no es un array.");
    }

    // 2. Referencia a la colección en Firestore
    const productsCollection = collection(db, products);

    // 3. Añadir los nuevos productos a Firestore
    const addPromises = fetchedProducts.map((product) => {
      delete product.id;
      addDoc(productsCollection, {
        ...product,
        createdAt: new Date(),
      });
    });

    await Promise.all(addPromises);

    console.log(`${fetchedProducts.length} productos añadidos a Firestore.`);
  } catch (err) {
    console.error("Error al obtener o almacenar productos:", err);
  }
}