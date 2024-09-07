import React from 'react';
import { ItemListContainer } from '../components';
import { ProductsData } from '../servicios/product';

export const Home = () => {
  return (
    <ItemListContainer products={ProductsData}/>
  )
}
