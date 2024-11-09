import { 
    ADD_TO_CART, 
    APPALY_COUPON_CART, // Corrected from APPLY_COUPON_CART
    GET_ALL_USER_CART, 
    UPDATE_ITEM_FROM_CART, // Corrected from UPDATE_ITEM_FROM_CART
    DELETE_ITEM_FROM_CART, // Corrected from DELETE_ITEM_FROM_CART
    CLEAR_ALL_USER_CART 
} from '../type';
import { useGetDataToken } from '../../hooks/useGetData';
import { useInsertData } from '../../hooks/useInsertData';
import useDeleteData from './../../hooks/useDeleteData';
import { useInsUpdateData } from './../../hooks/useUpdateData';

// Add product to cart
export const addProductToCart = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/cart`, body);
        dispatch({
            type: ADD_TO_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: ADD_TO_CART,
            payload: e.response || { message: "Error adding to cart" },
        });
    }
};

// Get all cart items
export const getAllUserCartItems = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/cart`);
        dispatch({
            type: GET_ALL_USER_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ALL_USER_CART,
            payload: e.response || { message: "Error fetching cart items" },
        });
    }
};

// Clear all cart items
export const clearAllCartItem = () => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart`);
        dispatch({
            type: CLEAR_ALL_USER_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: CLEAR_ALL_USER_CART,
            payload: e.response || { message: "Error clearing cart" },
        });
    }
};

// Delete cart item
export const deleteCartItem = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart/${id}`);
        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: e.response || { message: "Error deleting cart item" },
        });
    }
};

// Update cart item
export const updateCartItem = (id, body) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/cart/${id}`, body);
        dispatch({
            type: UPDATE_ITEM_FROM_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: UPDATE_ITEM_FROM_CART,
            payload: e.response || { message: "Error updating cart item" },
        });
    }
};

export const applayCoupnCart = (body) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/cart/applyCoupon`, body);
       // console.log(response)
        dispatch({
            type: APPALY_COUPON_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: APPALY_COUPON_CART,
            payload: e.response,
        })
    }
}
