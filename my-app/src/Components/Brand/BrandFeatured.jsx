import React from 'react'
import { Container, Spinner, Row } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/home-brand-hook'

const BrandFeatured = ({ title, btnTitle }) => {
    const [brand, loading] = HomeBrandHook();

    return (
        <Container>
            <SubTitle title={title} btnTitle={btnTitle} pathText="/allBrand" />
            <Row className='my-1 d-flex justify-content-between'>
                {loading ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    brand ? (
                        brand.data.slice(0, 5).map((item, index) => (
                            <BrandCard key={index} img={item.image} />
                        ))
                    ) : (
                        <h4>No brands available</h4>
                    )
                )}
            </Row>
        </Container>
    );
};

export default BrandFeatured;

