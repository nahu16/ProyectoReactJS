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
import { Link } from "react-router-dom";


export const ItemListContainer = ({ products }) => {
  return <Box display={"flex"} flexWrap={"wrap"} marginLeft={55} marginBottom={10}>
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
                $450
              </Text>
            <ButtonGroup spacing="2">
            {/*    <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button> */}
              <Link to={`/Item/${product.id}`}>Detalle del producto</Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))
  };  
  </Box>
}; 