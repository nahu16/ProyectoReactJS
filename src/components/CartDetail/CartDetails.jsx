import { useContext, useState } from "react";
import { CartContext } from "../../context";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Heading,
  Divider,
  VStack,
  HStack,
  Spacer,
  Alert,
  AlertIcon,
  IconButton,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export const CartDetails = () => {
  const { cartState, addItem, remuveItem, deleteItem } =
    useContext(CartContext);
  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyItem,
    0
  );

  const handleDeleteItem = (item) => {
    deleteItem(item);
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    const orderDetails = { name, phone, address, comments };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  };

  const handleCreateOrder = () => {

    const orderDetails = JSON.parse(localStorage.getItem("orderDetails")) || {};

    const ordenFinal = {
      envio: {
        nombre: orderDetails.name,
        telefono: orderDetails.phone,
        direccion: orderDetails.address,
        comentarios: orderDetails.comments
      },
      items: cartState.map((item) => {
        return {
          id: item.id,
          nombre: item.nombre,
          price: item.price,
          quantity: item.qtyItem
        };
      }),
      total: total,
    }
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, ordenFinal).then(({ id }) => {
      alert("Se creo la orden con id:" + id);
      console.log(orderDetails);
    })
  };

  return (
    <Box>
      <Box margin={30}>
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Detalles de la compra
        </Heading>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none"></InputLeftElement>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none"></InputLeftElement>
            <Input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em"></InputLeftElement>
            <Input
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputRightElement></InputRightElement>
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em"></InputLeftElement>
            <Input
              placeholder="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            <InputRightElement></InputRightElement>
          </InputGroup>
        </Stack>
        <Button marginTop={3} onClick={handleSubmit}>
          Enviar
        </Button>
      </Box>
      <Box p={6} maxW="800px" mx="auto">
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Detalles del Carrito
        </Heading>

        {cartState.length === 0 ? (
          <Alert status="info" borderRadius="md">
            <AlertIcon />
            Tu carrito está vacío.
          </Alert>
        ) : (
          <VStack spacing={4} align="stretch">
            {cartState.map((item) => (
              <Flex
                key={item.id}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                alignItems="center"
                boxShadow="sm"
              >
                <Image
                  src={item.image}
                  alt={item.nombre}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="md"
                  mr={4}
                />
                <Box flex="1">
                  <Text fontSize="xl" fontWeight="bold">
                    {item.nombre}
                  </Text>
                  <HStack spacing={4} mt={2}>
                    <Text>Precio: ${item.price.toFixed(2)}</Text>
                    <HStack>
                      <IconButton
                        aria-label="Disminuir cantidad"
                        icon={<MinusIcon />}
                        size="sm"
                        onClick={() => remuveItem(item)}
                        isDisabled={item.qtyItem === 1}
                      />
                      <Text>{item.qtyItem}</Text>
                      <IconButton
                        aria-label="Aumentar cantidad"
                        icon={<AddIcon />}
                        size="sm"
                        onClick={() => addItem(item)}
                      />
                    </HStack>
                  </HStack>
                </Box>
                <Spacer />
                <HStack>
                  <Text fontWeight="bold">
                    Subtotal: ${(item.price * item.qtyItem).toFixed(2)}
                  </Text>
                  <IconButton
                    aria-label="Eliminar producto"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    variant="outline"
                    onClick={() => handleDeleteItem(item)}
                  />
                </HStack>
              </Flex>
            ))}
            <Divider />
            <Flex alignItems="center">
              <Text fontSize="2xl" fontWeight="bold">
                Total: ${total.toFixed(2)}
              </Text>
              <Spacer />
              <Button onClick={handleCreateOrder}>
                Agregar orden
              </Button>
            </Flex>
          </VStack>
        )}
      </Box>
    </Box>
  );


};
