import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from './../../redux/actions/wishListAction';

const CardContainerHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [favProd, setFavProd] = useState([]);
    const res = useSelector(state => state.addToWishListReducer.allWishList);

    useEffect(() => {
        const fetchWishList = async () => {
            try {
                setLoading(true);
                await dispatch(getProductWishList());
            } catch (error) {
                console.error("Failed to fetch wishlist:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWishList();
    }, [dispatch]);

    useEffect(() => {
        if (!loading && res.data) {
            setFavProd(res.data.length > 0 ? res.data.map(item => item._id) : []);
        }
    }, [loading, res.data]);

    return { favProd, loading }; // Return an object for better clarity
};

export default CardContainerHook;