import { 
    ADD_USER_ADDRESS, 
    EDIT_USER_ADDRESS, 
    GET_ONE_USER_ADDRESS, 
    DELETE_USER_ADDRESS, 
    GET_ALL_USER_ADDRESS 
} from '../type';

const initialState = {
    addresses: [], // Changed from 'allAddresses' for clarity
    currentAddress: null, // Changed from 'oneAddress' to 'currentAddress' for clarity
    loading: true, // Added loading state for async operations
    error: null, // Added error state to handle errors
};

const userAddressesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_ADDRESS:
            return {
                ...state,
                addresses: [...state.addresses, action.payload], // Append new address to the existing list
                loading: false,
                error: null, // Clear error on successful addition
            };
        case GET_ALL_USER_ADDRESS:
            return {
                ...state,
                addresses: action.payload, // Update addresses with fetched data
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case DELETE_USER_ADDRESS:
            return {
                ...state,
                addresses: state.addresses.filter(address => address.id !== action.payload.id), // Remove address by ID
                loading: false,
                error: null, // Clear error on successful deletion
            };
        case GET_ONE_USER_ADDRESS:
            return {
                ...state,
                currentAddress: action.payload, // Store the fetched address
                loading: false,
                error: null, // Clear error on successful fetch
            };
        case EDIT_USER_ADDRESS:
            return {
                ...state,
                addresses: state.addresses.map(address => 
                    address.id === action.payload.id ? action.payload : address // Update address by ID
                ),
                loading: false,
                error: null, // Clear error on successful edit
            };
        default:
            return state;
    }
};

export default userAddressesReducer;