import React from 'react'
import { Container, Spinner, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/home-brand-hook'

const BrandFeatured = ({ title, btntitle }) => {
    const [brand, loading] = HomeBrandHook();

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                {loading ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    brand ? (
                        brand.data.slice(0, 5).map((item, index) => (
                            <BrandCard key={index} img={item.image} />
                        ))
                    ) : (
                        <h4>لا يوجد ماركات</h4>
                    )
                )}
            </Row>
        </Container>
    );
};

export default BrandFeatured;

