import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ProductCategory() {
    const { name } = useParams()
    const [productCategory, setProductCategory] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/product/cat/${name}`)
            .then((res) => {
                setProductCategory(res.data)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    })

    return (
        <>  
            <div className='container top'>
                <div className='product text-capitalize'>{name}</div>
                <div className='item_length'>{productCategory.length} Items</div>
            </div>
            <div className='container mt-1 main' >
                <div className='row'>
                    {
                        productCategory.map((product) => {
                            return (
                                <div className='col-3 mt-4 mb-2 text-center cursor-pointer' key={product._id}>
                                    <Link to={`/product/${product._id}`} >
                                        <img src={product.imageUrl} className='mx-auto d-block product_img' alt='products_img' />
                                        <div className='product_name'>{product.name}</div>
                                        <div className='product_price'>₹ {product.price}</div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductCategory
