import React from 'react'

export const useProductByid = (id) => {
    const [products, setProduct] = React.useState({});

    React.useEffect(()=>{
        getProductById(id).then((response)=> {
            set.products(response.data)
        }).catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[])


    return {products};
}
