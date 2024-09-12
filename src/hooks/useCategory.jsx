import React from "react";
import { ProductsData } from '../servicios/product'

const Categorias = [...new Set(ProductsData.map(product=> product.category))];


export const useCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    getcategory()
      .then((response) => {
        setCategory(Categorias)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {category}
  
};




