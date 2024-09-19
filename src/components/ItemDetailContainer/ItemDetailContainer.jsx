import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
  flexbox
} from "@chakra-ui/react";

import React from 'react'

export const ItemDetailContainer = ({productos}) => {
  return <Box display={"flex"} flexWrap={"wrap"} marginLeft={55} marginBottom={10}>
  {
      productos.map((product) =>  (              
      <Text fontSize={12} fontStyle="italic">Artista: {product.descripcion}</Text>
      ))
  };  
  </Box>
};