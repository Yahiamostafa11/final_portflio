import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const CategoryContainer = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.category);
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"];

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    return (
        <Container>
            <div className="admin-content-text mt-2">All Categories</div>
            <Row className='my-2 d-flex justify-content-between'>
                {loading ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    data ? (
                        data.map((item, index) => (
                            <CategoryCard
                                key={index}
                                title={item.name}
                                img={item.image}
                                background={colors[Math.floor(Math.random() * colors.length)]}
                            />
                        ))
                    ) : (
                        <h4>No Categories</h4>
                    )
                )}
            </Row>
        </Container>
    );
};

export default CategoryContainer;
