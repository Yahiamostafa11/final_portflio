import { 
    ADD_TO_CART, 
    APPALY_COUPON_CART, 
    UPDATE_ITEM_FROM_CART, 
    GET_ALL_USER_CART, 
    DELETE_ITEM_FROM_CART, 
    CLEAR_ALL_USER_CART 
} from '../type';

const initialState = {
    cartItems: [], // Changed from 'addToCart' to 'cartItems' for clarity
    allUserCart: [], // Changed from 'getAllUserCart' to 'allUserCart' for clarity
    coupon: null, // Changed from 'applyCoupon' to 'coupon' for clarity
    loading: true, // Added loading state for better UX
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload], // Append new item to cart
                loading: false,
            };
        case GET_ALL_USER_CART:
            return {
                ...state,
                allUserCart: action.payload,
                loading: false,
            };
        case CLEAR_ALL_USER_CART:
            return {
                ...state,
                cartItems: [], // Clear the cart
                loading: false,
            };
        case DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id), // Remove item by ID
                loading: false,
            };
        case UPDATE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload.id ? action.payload : item // Update item by ID
                ),
                loading: false,
            };
            case APPALY_COUPON_CART:
                return {
                    ...state,
                    applayCoupon: action.payload,
                }
        default:
            return state;
    }
};

export default cartReducer;