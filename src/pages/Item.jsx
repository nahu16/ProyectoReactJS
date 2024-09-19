import React from 'react'
import { useParams } from 'react-router'
import { useProductByid } from '../hooks';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { ProductsData } from '../servicios/product';


export const Item = () => {
    const { detalleid } = useParams(); 

    const detalleProducto = ProductsData.filter(product => product.descripcion===detalleid)

    return (
    <ItemDetailContainer productos={detalleProducto}/>
    )
}