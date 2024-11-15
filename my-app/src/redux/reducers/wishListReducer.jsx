import { ADD_TO_WISHLIST, USER_WISHLIST, REMOVE_FROM_WISHLIST } from '../type';

const initialState = {
    wishList: [], // Changed from 'allWishList' for clarity
    loading: true, // Added loading state for async operations
    error: null, // Added error state to handle errors
};

const addToWishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishList: [...state.wishList, action.payload], // Append new item to the existing wish list
                loading: false,
                error: null, // Clear error on successful addition
            };
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishList: state.wishList.filter(item => item.id !== action.payload.id), // Remove item by ID
                loading: false,
                error: null, // Clear error on successful removal
            };
        case USER_WISHLIST:
            return {
                ...state,
                wishList: action.payload, // Update wish list with fetched data
                loading: false,
                error: null, // Clear error on successful fetch
            };
        default:
            return state;
    }
};

export default addToWishListReducer;