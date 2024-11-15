import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetails from '../../Components/Products/ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import ViewHomeProductsHook from './../../hook/products/view-home-products-hook';
import ViewProductsDetailsHook from './../../hook/products/view-products-details-hook';
const ProductDetailsPage = () => {
    const { id } = useParams();
    const [item, images, cat, brand, prod] = ViewProductsDetailsHook(id);
    if (prod)
        var items = prod.slice(0, 4)

    if (item) {
        var rateAvg = item.ratingsAverage
        var rateQty = item.ratingsQuantity
    }

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetails />
                <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
                <CardProductsContainer products={items} title="Products you may like" />
            </Container>
        </div>
    )
}

export default ProductDetailsPage
