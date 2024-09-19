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
  flexbox,
  Flex
} from "@chakra-ui/react";

import React from 'react'

export const ItemDetailContainer = ({producto}) => {

  if(!producto){
    return <div>NO SE ENCONTRÓ EL PRODUCTO.</div>;
  }

  return (
    <Card margin={40} backgroundImage={producto.image} backgroundRepeat={"no-repeat"} >
      <CardBody>
        <Flex>
        <Image 
        src={producto.image}
        alt={producto.nombre}
        borderRadius="lg"
        height={350}
        width={400}
        margin={10}
      />
  <Box color="blue.600" display={"flex-box"} flexWrap={"wrap"} marginLeft={55} marginTop={10}>
      <Text fontSize={18} fontStyle="italic" marginLeft={10} > El clasico dísco {producto.nombre} de la banda {producto.category} fue publicado en {producto.año_publicacion} y cuenta con grandes exitos como {producto.descripcion} </Text>  
  <Text color="blue.600" fontSize="2xl" marginLeft={10} marginTop={300}> A un precio de $ 450</Text>
  </Box>
  </Flex>
  </CardBody>
  </Card>
);
};