import { 
    ADD_COUPON, 
    EDIT_COUPON, 
    GET_ALL_COUPON, 
    GET_ONE_COUPON, 
    DELETE_COUPON 
} from '../type';

const initialState = {
    coupons: [], // Changed from 'addCoupon' to 'coupons' for clarity
    allCoupons: [], // Changed from 'allCoupon' to 'allCoupons' for clarity
    oneCoupon: null, // Changed from array to null for clarity
    loading: true, // Added loading state for better UX
    error: null, // Added error state to handle errors
};

const couponReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUPON:
            return {
                ...state,
                coupons: [...state.coupons, action.payload], // Append new coupon to the existing list
                loading: false,
                error: null, // Clear error on successful addition
            };
        case GET_ALL_COUPON:
            return {
                ...state,
                allCoupons: action.payload, // Updated to match the new state property
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case DELETE_COUPON:
            return {
                ...state,
                coupons: state.coupons.filter(coupon => coupon.id !== action.payload.id), // Remove coupon by ID
                loading: false,
                error: null, // Clear error on successful deletion
            };
        case GET_ONE_COUPON:
            return {
                ...state,
                oneCoupon: action.payload, // Store the fetched coupon
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case EDIT_COUPON:
            return {
                ...state,
                coupons: state.coupons.map(coupon => 
                    coupon.id === action.payload.id ? action.payload : coupon // Update coupon by ID
                ),
                loading: false,
                error: null, // Clear error on successful edit
            };
        default:
            return state;
    }
};

export default couponReducer;