import { 
    GET_ALL_BRAND, 
    GET_ONE_BRAND, 
    GET_ERROR, 
    CREATE_BRAND 
} from '../type';

const initialState = {
    brands: [], // Changed from 'brand' to 'brands' for clarity
    oneBrand: null, // Changed from array to null for clarity
    loading: true,
};

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brands: action.payload, // Updated to match the new state property
                loading: false,
            };
        case GET_ONE_BRAND:
            return {
                ...state, // Ensure we spread the previous state
                oneBrand: action.payload,
                loading: false,
            };
        case CREATE_BRAND:
            return {
                ...state, // Ensure we spread the previous state
                brands: [...state.brands, action.payload], // Add the new brand to the existing list
                loading: false,
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

export default brandReducer;