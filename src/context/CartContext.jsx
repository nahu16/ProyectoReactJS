import { createContext, useState } from "react"

export const CartContext=createContext();

export const CartProvider = ({children}) =>{
    const [cartState, setCartState] = useState([]);

    const addItem = (producto, qtyItem)=>{
        const existingProduct = cartState.find((item)=> item.id === producto.id);

        if (existingProduct){
            setCartState(
                cartState.map((item)=>
                item.id === producto.id
            ? {...item,qtyItem: item.qtyItem+1}
        : item 
        )
        );
        } else {
            setCartState([...cartState, {...producto, qtyItem}]);
        }
    };

    const remuveItem = (producto)=>{
        const existingProduct = cartState.find((item)=> item.id === producto.id);

        if (existingProduct){
            if(existingProduct.qtyItem === 1){
                setCartState(cartState.filter((item)=>item.id !== producto.id));
            } else { 
                setCartState(
                    cartState.map((item)=>
                    item.id === producto.id
                ?{...item, qtyItem: item.qtyItem-1}
            :item)
                );
            }
        }
    };

    const deleteItem = (product) => {
        setCartState(cartState.filter((item) => item.id !== product.id));
      };


    return <CartContext.Provider value={{cartState,addItem, remuveItem,deleteItem}}>{children}</CartContext.Provider>
};