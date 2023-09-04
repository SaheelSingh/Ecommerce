import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <>
            <div className='container top'>
                <div className='product'>All Products</div>
                <div className='item_length'>{products.length} Items</div>
            </div>
            <div className='container mt-1 main' >
                <div className='row'>
                    {
                        products.map((product) => {
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

export default Products
