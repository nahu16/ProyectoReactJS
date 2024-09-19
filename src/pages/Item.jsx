import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useProductByid } from '../hooks';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { useEffect } from 'react';

    export const Item = () => {
        const {id}=useParams();
        const [productDetail, setproductDetail] = useState();
        
        useEffect(()=>{
        if (id){
            const detalleProducto = useProductByid(id);
            setproductDetail(detalleProducto);}
        }, [id]);

        return <ItemDetailContainer producto={productDetail}/>
    };