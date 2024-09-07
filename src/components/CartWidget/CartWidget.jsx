import { Flex,Text } from "@chakra-ui/react"
import { BsCart4 } from "react-icons/bs";


export const CartWidget =()=>{
    return(
        <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"50px"}>
            <BsCart4 size={25}/>
            <Text fontSize={16} >9</Text>
        </Flex>
    )

}
