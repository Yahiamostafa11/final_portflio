import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import NavBarLogin from '../../Components/Utility/NavBarLogin';
import Slider from './../../Components/Home/Slider';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Utility/Footer';
import ViewHomeProductsHook from './../../hook/products/view-home-products-hook';
const HomePage = () => {

    const [items] = ViewHomeProductsHook();
    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Slider />
            <HomeCategory />
            <CardProductsContainer products={items} title="Best Sellers" btnTitle="More" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer products={items} title="Latest Fashion" btnTitle="More" pathText="/products" />
            <BrandFeatured title="Famous Brands" btnTitle="More" />

        </div>
    )
}

export default HomePage
