import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useItemsCollection = (categoryName) => {
  const [items, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const productsCollection = collection(db, categoryName);

    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, loading };
};