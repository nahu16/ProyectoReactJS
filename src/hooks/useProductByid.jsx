import { useEffect, useState } from 'react'
import { ProductsData } from '../servicios/product';

export const useProductByid = (id) => {
    const [product,setProduct] = useState(null);
    
    useEffect(()=>{
        const foundProduct = ProductsData.find(product=>product.id === id)
        setProduct	(foundProduct)
    },[id])
    return {product};
    
}
