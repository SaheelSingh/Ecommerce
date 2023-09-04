import React, { useContext } from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { UserContext } from '../../UserContextProvider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';

function Header() {
    const { username, setUsername, setId } = useContext(UserContext)
    console.log(username)

    function logout() {
        axios.post('http://localhost:4000/logout')
        .then(() => {
            setUsername(null)
            setId(null)
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-primary justify-content-center">
                <Link to={'/'} className="navbar-brand">
                    <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='flipkart_logo' />
                    <p>Explore Plus</p>
                </Link>

                <div className="navbar">
                    <form className="form-inline">
                        <input className="form-control input" type="search" placeholder="Search for products, brands and more" aria-label="Search" />
                    </form>
                    <b><h3 className='ml-5'>{username}</h3></b>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>


                    {/* <Link to={'/login'}>
                    <button className='btn btn-light ml-10 text-primary'>Login</button>
                    </Link> */}
                    <Link to={'/products'}>
                        <span className='products ml-10'>All Products</span>
                    </Link>
                    <Link to={'/cart'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: ml-10 h-9 w-9 fill-current cursor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </Link>

                    <button className='font-bold py-2 px-4 rounded inline-flex items-center' onClick={logout}>
                        <ExitToAppIcon className='ml-20 h-3 mr-1' />Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header
