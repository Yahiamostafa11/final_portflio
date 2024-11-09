import { 
    ADD_USER_ADDRESS, 
    EDIT_USER_ADDRESS, 
    GET_ONE_USER_ADDRESS, 
    DELETE_USER_ADDRESS, 
    GET_ALL_USER_ADDRESS 
} from '../type';
import { useGetDataToken } from '../../hooks/useGetData';
import { useInsertData } from '../../hooks/useInsertData';
import useDeleteData from './../../hooks/useDeleteData';
import { useInsUpdateData } from './../../hooks/useUpdateData';

// Add user address
export const addUserAddress = (body) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/v1/addresses", body);
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: e.response?.data?.message || "Error adding user address",
        });
    }
};

// Get all user addresses
export const getAllUserAddress = () => async (dispatch) => {
    try {
        const response = await useGetDataToken('/api/v1/addresses');
        dispatch({
            type: GET_ALL_USER_ADDRESS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ALL_USER_ADDRESS,
            payload: e.response?.data?.message || "Error fetching user addresses",
        });
    }
};

// Delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/addresses/${id}`);
        dispatch({
            type: DELETE_USER_ADDRESS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: DELETE_USER_ADDRESS,
            payload: e.response?.data?.message || "Error deleting user address",
        });
    }
};

// Get one user address
export const getOneUserAddress = (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/addresses/${id}`);
        dispatch({
            type: GET_ONE_USER_ADDRESS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ONE_USER_ADDRESS,
            payload: e.response?.data?.message || "Error fetching user address",
        });
    }
};

// Edit user address
export const editUserAddress = (id, body) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/addresses/${id}`, body);
        dispatch({
            type: EDIT_USER_ADDRESS,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: EDIT_USER_ADDRESS,
            payload: e.response?.data?.message || "Error editing user address",
        });
    }
};
