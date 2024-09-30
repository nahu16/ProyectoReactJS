import { Flex, Text, Button, Box, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BsMinecart } from "react-icons/bs";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";
import { CartPopup } from "../CartDetail/CartPopup";



export const CartWidget = () => {
    const { cartState } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    
    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <Box 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)} 
            position="relative"
        >
            <Button>
                <Link to="./carrito"> 
                    <Flex
                        alignItems={"center"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        width={"60px"}
                    >
                        <BsMinecart size={30} />
                        <Text fontSize={"1.5rem"}>{qtyTotalItems}</Text>
                    </Flex>
                </Link> 
            </Button>
            {isOpen && (
                <Box color="blue.600" position="fixed" marginTop={"10"} right="0" zIndex="1" bg="#293748" boxShadow="md" borderRadius="md" p={4}>
                    <CartPopup />
                </Box>
            )}
        </Box>
    );
};
