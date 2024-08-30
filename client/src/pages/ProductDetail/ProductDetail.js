import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function ProductDetail() {

    const navigate = useNavigate()
    const [productDetail, setProductDetail] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:4000/product/${id}`)
            .then(res => {
                setProductDetail(res.data)
                console.log(productDetail)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const handleCart = (product) => {
        console.log(product)
        const cart = JSON.parse(localStorage.getItem('Cart')) || [];
        const isProductExits = cart.find(item => item.id === product.id)
        if(isProductExits) {
            const updatedCart = cart.map(item => {
                if(item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            localStorage.setItem('Cart', JSON.stringify(updatedCart))
        }
        else {
            localStorage.setItem('Cart', JSON.stringify([...cart, {...product, quantity: 1}]))
        }
        alert('Product added to cart')
        navigate('/cart')
    }

    if(loading) {
        return (
            <span>Loading...</span>
        )
    }

    return (
        <div className='box'>
            <div className='row'>
                <div className='col-6'>
                    <img src={productDetail ? productDetail.imageUrl : ''} className='mx-auto d-block productDetail_img' alt='product_img' />
                </div>
                <div className='col-6'>
                    <p className='text-secondary text-uppercase pt-5'>{productDetail ? productDetail.category : ''}</p>
                    <span className='productDetail_name mt-10'>{productDetail ? productDetail.name : ''}</span>
                    <div>
                        <span className='chip'>{productDetail ? productDetail.rating[0].rate : ''}
                            <svg aria-hidden="true" className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </span>
                        <span className='font-bold text-secondary ml-5'>{productDetail ? productDetail.rating[0].count : ''} Ratings</span>
                    </div>
                    <div className='price'>
                        <span className='special text-success'>Special Price</span>
                        <div className='productDetail_price'>₹ {productDetail ? productDetail.price : ''}</div>
                    </div>
                    <div className='productDetail_description'>
                        {productDetail ? productDetail.description : ''}
                    </div>
                    <button className='add_to_cart' onClick={() => handleCart(productDetail)}>
                        <ShoppingCartIcon /> Add to Cart
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
