import { 
    GET_ALL_CATEGORY, 
    GET_ONE_CATEGORY, 
    GET_ERROR, 
    CREATE_CATEGORY 
} from '../type';

const initialState = {
    categories: [], // Changed from 'category' to 'categories' for clarity
    oneCategory: null, // Changed from array to null for clarity
    loading: true,
    error: null, // Added error state to handle errors
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                categories: action.payload, // Updated to match the new state property
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case GET_ONE_CATEGORY:
            return {
                ...state, // Ensure we spread the previous state
                oneCategory: action.payload,
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case CREATE_CATEGORY:
            return {
                ...state, // Ensure we spread the previous state
                categories: [...state.categories, action.payload], // Append new category to the existing list
                loading: false,
                error: null, // Clear error on successful creation
            };
        case GET_ERROR:
            return {
                ...state, // Ensure we spread the previous state
                loading: false, // Set loading to false on error
                error: action.payload, // Store the error message
            };
        default:
            return state;
    }
};

export default categoryReducer;