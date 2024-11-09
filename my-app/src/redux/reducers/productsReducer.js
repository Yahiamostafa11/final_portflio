import { 
    DELETE_PRODUCTS, 
    UPDATE_PRODUCTS, 
    CREATE_PRODUCTS, 
    GET_PRODUCT_LIKE, 
    GET_PRODUCT_DETAILS, // Corrected spelling from 'GET_PRODUCT_DETALIS' to 'GET_PRODUCT_DETAILS'
    GET_ALL_PRODUCTS, 
    GET_ERROR 
} from '../type';

const initialState = {
    products: [], // This can be used for newly created products
    allProducts: [], // This holds all products fetched from the server
    oneProduct: null, // Changed from array to null for clarity
    productLike: [], // Products that are liked
    loading: true, // Loading state for async operations
    error: null, // Added error state to handle errors
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload], // Append new product to the existing list
                loading: false,
                error: null, // Clear error on successful creation
            };
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload, // Update all products
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case GET_PRODUCT_DETAILS: // Corrected spelling
            return {
                ...state,
                oneProduct: action.payload, // Store the fetched product details
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload, // Store liked products
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case DELETE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id), // Remove product by ID
                loading: false,
                error: null, // Clear error on successful deletion
            };
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: state.products.map(product => 
                    product.id === action.payload.id ? action.payload : product // Update product by ID
                ),
                loading: false,
                error: null, // Clear error on successful update
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

export default productsReducer;