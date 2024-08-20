import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda"/>
    </ChakraProvider>
  )
}

export default App
