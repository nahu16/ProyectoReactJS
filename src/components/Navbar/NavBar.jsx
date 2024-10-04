import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Img,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {CartWidget} from '../CartWidget';
import Logo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';
//import { createProductsFirestore } from '../../helpers';
import { useItemsCollection } from '../../hooks';



export const NavBar = ()=> {
    const { colorMode, toggleColorMode } = useColorMode()

    const {items} = useItemsCollection("categories");

    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box display={"flex"} textAlign={"center"} fontSize={"25px"}>
                    <Img src={Logo} width={"70px"}  justifyContent={"space-between"} borderRadius={"10px"}/>
                    <Link to="/">Cultura Rockera</Link>
                </Box>
                <Menu>
                    <MenuButton as={Link} cursor="pointer" style={{marginRight:140}}>
                        Bandas
                    </MenuButton>
                    <MenuList height={'fit-content'} overflowY={"scroll"}>
                    {items.map((category)=>(
                        <MenuItem key={category.id}>
                            <Link to={`/Category/${category.category}`}>{category.category}</Link>
                        </MenuItem>
                    ))}
                </MenuList>
                </Menu>
                {/* <Button onClick={()=>createProductsFirestore('products')}>crear productos</Button> */}
                <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                    <CartWidget/>
                    <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>

                    <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                        size={'sm'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                        <Avatar
                            size={'2xl'}
                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                        </Center>
                        <br />
                        <Center>
                        <p>Username</p>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem>Your Servers</MenuItem>
                        <MenuItem>Account Settings</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                    </Menu>
                </Stack>
            </Flex>
            </Flex>
        </Box>
        </>
    )

};

