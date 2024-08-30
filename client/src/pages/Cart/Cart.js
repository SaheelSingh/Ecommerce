import React, { useEffect, useState } from 'react'
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {

  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const carts = JSON.parse(localStorage.getItem('Cart'))
  console.log(carts)

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [carts])

  const removeProduct = (id) => {
    const updatedCart = carts.filter(item => item.id !== id)
    localStorage.setItem('Cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  if (carts.length === 0) {
    return (
      <>
        <div className='flipkart'>
          <div className='row'>
            <div className='col-12 text-center text-primary'>Flipkart</div>
          </div>
        </div>
        <div className='div1 text-center'>
          <img src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' className='mx-auto d-block empty_cart' alt='empty_cart' />
          <div className='h3 mt-4' >Missing Cart items?</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <div className='flipkarts'>
              <div className='row'>
                <div className='col-12 text-center text-primary'>Flipkart ({carts.length}) </div>
              </div>
            </div>
            <div className='left-box'>
              <div className='row'>
                {
                  carts.map(cart => {
                    return (
                      <>
                        <div className='col-4'>
                          <img src={cart.imageUrl} alt='cartproduct_img' className='cartproduct_img mx-auto d-block' />
                        </div>
                        <div className='col-8'>
                          <div className='mt-4'>
                            <Link to={`/products/${cart.id}`} className='cartproduct_name'>{cart.name}</Link>
                          </div>
                          <div className='cartproduct_cat'>{cart.catagory}</div>
                          <div className='sellerVision'>Seller:Vision Star <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' alt='seller' className='w-14 h-4 m-1' /> </div>
                          <div className='mt-3'>
                            <span className='cartproduct_price'>₹{cart.price}</span>
                          </div>
                          <div className='remove' onClick={() => removeProduct(cart.id)}>
                            Remove
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
              <div className='bottom'>
                <button className='place_order mr-5'>Place order</button>
              </div>
            </div>
          </div>
          <div className='col-4 right-box'>
            <div className='row'>
              <div className='text-secondary h6 uppercase m-3'>Price Details</div>
            </div>
            <hr />
            <div className='row pricing'>
              <div className='col-8'>
                <div>Price ({carts.length} items)</div>
                <div>Delivery Charge</div>
              </div>
              <div className='col-4'>
                <div>₹{total}</div>
                <div className='text-success'>Free</div>
              </div>
            </div>
            <hr className='mt-4' />
            <div className='row h4 m-1 mt-2'>
              <div className='col-8'>
                <div>Total Price</div>
              </div>
              <div className='col-4'>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
