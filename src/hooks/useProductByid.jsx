import { useEffect, useState } from 'react'
import { ProductsData } from '../servicios/product';


    export const useProductByid = (id) => {
        return ProductsData.find((product)=>product.id===Number(id));
    };