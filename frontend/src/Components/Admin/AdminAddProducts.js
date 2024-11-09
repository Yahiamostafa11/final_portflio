import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { useDispatch, useSelector } from 'react-redux';

import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import AdminAddProductsHook from './../../hook/products/add-products-hook';


const ProductCardHook = (item, favProd) => {
    const dispatch = useDispatch();

    // State for fav image and fav status
    const [favImg, setFavImg] = useState(favOff);
    const [loadingAdd, setLoadingAdd] = useState(false);
    const [loadingRemove, setLoadingRemove] = useState(false);
    const [isFav, setIsFav] = useState(favProd.some(fItem => fItem === item._id));

    useEffect(() => {
        setIsFav(favProd.some(fItem => fItem === item._id));
    }, [favProd, item._id]);

    useEffect(() => {
        if (isFav) {
            setFavImg(favOn);
        } else {
            setFavImg(favOff);
        }
    }, [isFav]);

    const resAdd = useSelector(state => state.addToWishListReducer.addWishList);
    const resRemove = useSelector(state => state.addToWishListReducer.removeWishList);

    const addToWishListData = async () => {
        setIsFav(true);
        setFavImg(favOn);
        setLoadingAdd(true);
        dispatch(addProductToWishList({ productId: item._id }));
    };

    const removeToWishListData = async () => {
        setIsFav(false);
        setFavImg(favOff);
        setLoadingRemove(true);
        await dispatch(removeProductToWishList(item._id));
        setLoadingRemove(false);
    };

    const handelFav = () => {
        if (isFav) {
            removeToWishListData();
        } else {
            addToWishListData();
        }
    };

    useEffect(() => {
        if (!loadingAdd && resAdd) {
            if (resAdd.status === 200) {
                notify("تمت اضافة المنتج للمفضلة بنجاح", "success");
            } else if (resAdd.status === 401) {
                notify("انتا غير مسجل", "error");
            }
        }
    }, [loadingAdd, resAdd]);

    useEffect(() => {
        if (!loadingRemove && resRemove) {
            if (resRemove.status === "success") {
                notify("تمت حذف المنتج من المفضلة بنجاح", "warn");
            } else if (resRemove.status === 401) {
                notify("انتا غير مسجل", "error");
            }
        }
    }, [loadingRemove, resRemove]);

    return [removeToWishListData, addToWishListData, handelFav, favImg];
};

export default ProductCardHook;
