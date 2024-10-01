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
import { Link, useNavigate } from "react-router-dom";



export const ItemListContainer = ({ products }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`); // Cambia la ruta según tu configuración
  };

  return<Box>
  <Box justifyContent={"space-around"} display={"flex"}>
  <Button onClick={() => handleCategoryClick('La vela puerca')}borderRadius={100} height={55} width={55}
    bgImage={"src/assets/Discos/Logo LVP.jpg"}
    bgSize="cover"
    bgPosition="center">
  </Button>
  <Button onClick={() => handleCategoryClick('Los Piojos')}borderRadius={100} height={55} width={55}
    bgImage={"src/assets/Discos/Lospiojos.png"}  bgSize="cover"
    bgPosition="center"></Button>
  <Button onClick={() => handleCategoryClick('No te va gustar')}borderRadius={100} height={55} width={55}bgImage={"src/assets/Discos/NTVG.png"}  bgSize="cover"
  bgPosition="center"></Button>
</Box>
  <Box display={"flex"} flexWrap={"wrap"} marginTop={50} marginLeft={200} marginBottom={10}>
      
  {
      products.map((product) =>  (
        <Card key={product.id} maxW="sm" marginTop={"1rem"} marginLeft={"2rem"}>
          <CardBody>
            <Image
              src={product.image}
              alt={product.nombre}
              borderRadius="lg"
              height={350}
              width={400}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.nombre}</Heading>
              <Text fontSize={12} fontStyle="italic">Artista: {product.category}</Text>
              <Text fontSize={12} fontStyle="italic"> Año de lanzamiento: {product.año_publicacion}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
          <Text color="blue.600" fontSize="2xl" marginRight={100}>
                ${product.price}
              </Text>
            <ButtonGroup spacing="2">
              <Link to={`/Item/${product.id}`}>Detalle del producto</Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))
  };  
  </Box>
  </Box>
}; 