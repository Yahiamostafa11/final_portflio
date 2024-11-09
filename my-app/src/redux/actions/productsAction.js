import { 
    DELETE_PRODUCTS, 
    UPDATE_PRODUCTS, 
    CREATE_PRODUCTS, 
    GET_PRODUCT_LIKE, 
    GET_ALL_PRODUCTS, 
    GET_PRODUCT_DETAILS, 
    GET_ERROR 
} from '../type';
import { useInsertDataWithImage } from '../../hooks/useInsertData';
import { useGetData } from './../../hooks/useGetData';
import useDeleteData from './../../hooks/useDeleteData';
import { useInUpdateDataWithImage } from '../../hooks/useUpdateData';
import axios from 'axios';
// Create product
export const createProduct = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage("/api/v1/products", formData);
        dispatch({
            type: CREATE_PRODUCTS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error creating product",
        });
    }
};

// Get all products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error fetching products",
        });
    }
};

// Get all products with pagination and page number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error fetching products",
        });
    }
};

// Get all products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?${queryString}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error fetching products",
        });
    }
};
export const getProductDetails = (id) => async (dispatch) => {
    try {
        // Replace `useGetData` with axios or fetch
        const response = await axios.get(`/api/v1/products/${id}`);
        dispatch({
            type: GET_PRODUCT_DETAILS,
            payload: response.data, // Ensure you're accessing the correct data format
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error fetching product details",
        });
    }
};
// Delete product
export const deleteProducts = (id) => async (dispatch) => {
    try {
        await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type: DELETE_PRODUCTS,
            payload: id,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error deleting product",
        });
    }
};

// Update product
export const updateProduct = (id, formData) => async (dispatch) => {
    try {
        const response = await useInUpdateDataWithImage(`/api/v1/products/${id}`, formData);
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error updating product",
        });
    }
};

// Get products liked by the user
export const getProductLike = (userId) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products/liked/${userId}`);
        dispatch({
            type: GET_PRODUCT_LIKE,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error fetching liked products",
        });
    }
};//get one product with id

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products/${id}`);
        dispatch({
            type: GET_PRODUCT_DETAILS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
};





