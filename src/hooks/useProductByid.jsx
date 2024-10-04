import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useProductByid = (id) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const productItem = doc(db, 'products', id);
    getDoc(productItem).then((snapshot) => {
      setProducts({ id: snapshot.id, ...snapshot.data() });
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};