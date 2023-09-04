import React, { useContext } from 'react';
import { UserContext } from './UserContextProvider';
import SignupAndLogin from './pages/SignupAndLogin';
import Home from './modules/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Product/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
import ProductCategory from './components/Category/ProductCategory';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

function Routing() {
    const { username, id } = useContext(UserContext);

    if (username) {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/product/:id' element={<ProductDetail />} />
                    <Route path='/product/cat/:name' element={<ProductCategory />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }

    return (
        <SignupAndLogin />
    )
}

export default Routing
