import React from 'react'
import { useParams } from 'react-router'
import { useProductByid } from '../hooks';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';


export const Item = () => {
    const { id } = useParams(); 

    const {products}=useProductByid(id);

    return (
    <ItemDetailContainer/>
    )
}
