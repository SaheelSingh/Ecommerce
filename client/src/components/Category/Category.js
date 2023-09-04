import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

function Category() {
    const categories = [
        {
            id: '1',
            imageUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',
            name: 'grocery'
        },
        {
            id: '2',
            imageUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
            name: 'mobile'
        },
        {
            id: '3',
            imageUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
            name: 'electronic'
        },
        {
            id: '4',
            imageUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
            name: 'appliance'
        },
        {
            id: '5',
            imageUrl: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100',
            name: 'fashion'
        },
        {
            id: '6',
            imageUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100',
            name: 'toy'
        },
    ]

    return (
        <div className='category d-flex justify-content-center'>
            <div className='row'>
                {
                    categories.map((category) => {
                        return (
                            <div className='col cursor-pointer ml-4' key={category.id} >
                                {/* <img src={category.imageUrl} className='catImg' />
                                <div className='text-center font-bold'>{category.name}</div> */}
                                <Link to={`/product/cat/${category.name}`}>
                                        <img src={category.imageUrl} className='catImg' alt='catImg' />
                                        <div className='text-center font-bold text-capitalize'>{category.name}</div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category
