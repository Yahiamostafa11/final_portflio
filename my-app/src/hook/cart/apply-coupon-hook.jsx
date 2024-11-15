import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createBrand } from '../../redux/actions/brandAction.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../Alter.jsx'
import { applyCouponCart } from '../../redux/actions/cartAction.jsx';
import cartReducer from '../../redux/reducers/cartReducer.jsx';
import GetAllUserCartHook from './get-all-user-cart-hook.jsx';
const ApplyCouponHook = () => {
    const dispatch = useDispatch();

    const [couponName, setCouponName] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeCoupon = (e) => {
        setCouponName(e)
    }

    const handleSubmitCoupon = async () => {
        if (couponName === "") {
            notify("Please enter the coupon", "warn")
            return
        }
        setLoading(true)
        await dispatch(applyCouponCart({
            couponName: couponName
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.applyCoupon)

    useEffect(() => {

        if (loading === false) {
            console.log(res)
            if (res && res.status === 200) {
                notify("Coupon applied successfully", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);

            } else {
                notify("This coupon is invalid or expired", "warn")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }
    }, [loading])


    return [couponName, onChangeCoupon, handleSubmitCoupon]

}

export default ApplyCouponHook
