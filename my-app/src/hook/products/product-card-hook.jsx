import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToWishList, removeProductToWishList } from './../../redux/actions/wishListAction';
import notify from '../Alter.jsx'
import favOff from "../../images/fav-off.png";
import favOn from "../../images/fav-on.png";

const ProductCardHook = (item, favProd) => {
    const dispatch = useDispatch();
    const [favImg, setFavImg] = useState(favOff)
    let Fav = favProd.some(fItem => fItem === item._id);
    const [loadingAdd, setLoadingAdd] = useState(true)
    const [loadingRemove, setLoadingRemove] = useState(true)
    const [isFav, setIsFav] = useState(Fav)

    useEffect(() => {
        setIsFav(favProd.some(fItem => fItem === item._id))
    }, [favProd])

    const handelFav = () => {
        if (isFav) {
            removeToWishListData();
        } else {
            addToWishListData()
        }
    }

    useEffect(() => {
        if (isFav === true) {
            setFavImg(favOn)
        } else {
            setFavImg(favOff)
        }
    }, [isFav])

    const resAdd = useSelector(state => state.addToWishListReducer.addWishList)
    const resRemove = useSelector(state => state.addToWishListReducer.removeWishList)

    const addToWishListData = async () => {
        setIsFav(true)
        setFavImg(favOn)
        setLoadingAdd(true)
        dispatch(addProductToWishList({
            productId: item._id,
        }))
        setLoadingAdd(false)
    }

    const removeToWishListData = async () => {
        setIsFav(false)
        setFavImg(favOff)
        setLoadingRemove(true)
        dispatch(removeProductToWishList(item._id))
        setLoadingRemove(false)
    }

    useEffect(() => {
        if (loadingAdd === false) {
            console.log(resAdd)
            if (resAdd && resAdd.status === 200) {
                notify("Product added to wishlist successfully", "success")
            } else if (resAdd && resAdd.status === 401) {
                notify("You are not registered", "error")
            }
        }
    }, [loadingAdd])

    useEffect(() => {
        if (loadingRemove === false) {
            console.log(resRemove)
            if (resRemove && resRemove.status === "success") {
                notify("Product removed from wishlist successfully", "warn")
            } else if (resAdd && resAdd.status === 401) {
                notify("You are not registered", "error")
            }
        }
    }, [loadingRemove])

    return [removeToWishListData, addToWishListData, handelFav, favImg]
}

export default ProductCardHook
