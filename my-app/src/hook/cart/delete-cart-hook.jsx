import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createBrand } from '../../redux/actions/brandAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../Alter.jsx'
import { clearAllCartItem, deleteCartItem, updateCartItem } from './../../redux/actions/cartAction';

const DeleteCartHook = (item) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [itemCount, setItemCount] = useState(0)

    const handleDeleteCart = async () => {
        setLoading(true)
        await dispatch(clearAllCartItem())
        setLoading(false)
    }
    const onChangeCount = (e) => {
        setItemCount(e.target.value)
    }
    useEffect(() => {
        if (item)
            setItemCount(item.count)
    }, [])
    const res = useSelector(state => state.cartReducer.clearCart)
    useEffect(() => {
        if (loading === false) {
            if (res === "") {
                notify("Deleted successfully", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
            }

        }
    }, [loading])


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const dispatch = useDispatch();

    const handleDeleteItem = async () => {
        await dispatch(deleteCartItem(item._id))
        setShow(false);
        window.location.reload(false);
    }

    const handleUpdateCart = async () => {
        await dispatch(updateCartItem(item._id, {
            count: itemCount
        }))

        window.location.reload(false);
    }

    return [handleDeleteCart, show, handleClose, handleShow, handleDeleteItem, itemCount, onChangeCount, handleUpdateCart]

}

export default DeleteCartHook