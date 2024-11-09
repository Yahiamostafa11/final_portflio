import { GET_ERROR, GET_SUB_CATEGORY, CREATE_SUB_CATEGORY } from '../type';

const initialState = {
    subcategories: [], // Changed from 'subcategory' to 'subcategories' for clarity
    loading: true, // Loading state for async operations
    error: null, // Added error state to handle errors
};

const subcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUB_CATEGORY:
            return {
                ...state,
                subcategories: [...state.subcategories, action.payload], // Append new subcategory to the existing list
                loading: false,
                error: null, // Clear error on successful creation
            };
        case GET_SUB_CATEGORY:
            return {
                ...state,
                subcategories: action.payload, // Update subcategories with fetched data
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case GET_ERROR:
            return {
                ...state,
                loading: false, // Set loading to false on error
                error: action.payload, // Store the error message
            };
        default:
            return state;
    }
};

export default subcategoryReducer;