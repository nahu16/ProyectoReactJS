import React from 'react';
import { useParams } from 'react-router';
import { ItemListContainer } from '../components';
import { ProductsData } from '../servicios/product';



export const Category = () => {
    const {categoryId}=useParams();

    const filtrarProducto = ProductsData.filter(product => product.category===categoryId);
  return ( 
    <ItemListContainer products={filtrarProducto}/>
  )
  
} 


