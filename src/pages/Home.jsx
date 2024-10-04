import React from 'react';
import { ItemListContainer } from '../components';
import { useItemsCollection } from '../hooks';

export const Home = () => {
  const {items}=useItemsCollection("products");

  return(
  <ItemListContainer products={items}/>
  )
};