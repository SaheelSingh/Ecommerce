import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Banner.css'
import { Carousel } from 'react-responsive-carousel';

function Banner() {

    const banners = [
        {
            id: '1',
            banner_img: 'https://png.pngtree.com/template/20211025/ourmid/pngtree-cross-border-e-commerce-amazon-overseas-simple-fashion-backpack-travel-banner-image_661109.jpg'
        },
        {
            id: '2',
            banner_img: 'https://www.netans.com/wp-content/uploads/2019/10/Flipkart-Big-Billion-Days.jpg'
        },
        {
            id: '3',
            banner_img: 'https://rukminim1.flixcart.com/fk-p-flap/844/140/image/4ec7ced1890d27de.jpg?q=50'
        }
    ]

    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
            {
                banners.map((banner) => {
                    return (
                        <div key={banner.id}>
                            <img src={banner.banner_img} className='banner_image' />
                        </div>
                    )
                })
            }
        </Carousel>

    )
}

export default Banner
