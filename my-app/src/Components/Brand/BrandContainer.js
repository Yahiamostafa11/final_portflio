import React from 'react';
import BrandCard from './BrandCard';
import { Container, Row, Spinner } from 'react-bootstrap';

const BrandContainer = ({ data, loading }) => {
    return (
        <Container>
            <div className="admin-content-text mt-2">كل الماركات</div>
            <Row className="my-1 d-flex justify-content-between">
                {loading ? (
                    // Show loading spinner while data is being fetched
                    <Spinner animation="border" variant="primary" />
                ) : (
                    // If not loading, check if there is data
                    data && data.length > 0 ? (
                        data.map((item, index) => (
                            <BrandCard key={index} img={item.image} />
                        ))
                    ) : (
                        // If no data, display "No brands"
                        <h4>لا يوجد ماركات</h4>
                    )
                )}
            </Row>
        </Container>
    );
};

export default BrandContainer;

