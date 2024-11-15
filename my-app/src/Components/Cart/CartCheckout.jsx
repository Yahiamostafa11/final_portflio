import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeleteCartHook from './../../hook/cart/delete-cart-hook';
import { ToastContainer, toast } from 'react-toastify';
import ApplyCouponHook from './../../hook/cart/apply-coupon-hook';
const CartCheckout = ({ totalCartPrice, totalCartPriceAfterDiscount, couponNameRes }) => {

    const [handelDeleteCart] = DeleteCartHook()

    const [couponName, onChangeCoupon, handelSubmitCoupon] = ApplyCouponHook();

    useEffect(() => {
        if (couponNameRes) {
            onChangeCoupon(couponNameRes)
        }
    }, [couponNameRes])
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        value={couponName}
                        onChange={(e) => onChangeCoupon(e.target.value)}
                        className="coupon-input d-inline text-center "
                        placeholder="Discount Code"
                    />
                    <button onClick={handelSubmitCoupon} className="coupon-btn d-inline ">Apply</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    {
                        totalCartPriceAfterDiscount >= 1 ?
                            `${totalCartPrice} EGP ... After Discount ${totalCartPriceAfterDiscount} ` :
                            `${totalCartPrice} EGP`
                    }
                </div>
                <Link
                    to="/order/paymethod"
                    style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline ">

                    <button className="product-cart-add w-100 px-2"> Complete Purchase</button>
                </Link>
                <button onClick={handelDeleteCart} className="product-cart-add w-100 px-2 my-1"> Clear Cart</button>
            </Col>
            <ToastContainer />
        </Row>
    )
}

export default CartCheckout