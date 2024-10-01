import React from 'react';
import { ItemListContainer } from '../components';
import { ProductsData } from '../servicios/product';
import { Box, Button, Center } from '@chakra-ui/react';

export const Home = () => {
  return(
    <ItemListContainer products={ProductsData}/>
) 
}

