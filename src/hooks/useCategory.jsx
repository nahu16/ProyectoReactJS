import React from "react";
import { ProductsData } from '../servicios/product'



export const useCategory = () => {
  const categorias = [
    ...new Set(ProductsData.map(product=> product.category))
  ]

  return {categorias}
  
};




