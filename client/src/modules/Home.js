import Banner from '../components/Banner/Banner'
import Category from '../components/Category/Category'
import Header from '../components/Header/Header'
import Products from '../pages/Product/Products'

function Home() {
    return (
        <>
            <Category />
            <Banner />
            <Products />
        </>
    )
}

export default Home
