import { 
    CREATE_SUB_CATEGORY, 
    GET_SUB_CATEGORY, 
    GET_ERROR 
} from '../type';
import { useGetData } from '../../hooks/useGetData';
import { useInsertData } from '../../hooks/useInsertData';

// Create subcategory
export const createSubCategory = (data) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/v1/subcategories", data);
        dispatch({
            type: CREATE_SUB_CATEGORY,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error creating subcategory",
        });
    }
};

// Get subcategories based on category ID
export const getOneCategory = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
        dispatch({
            type: GET_SUB_CATEGORY,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response?.data?.message || "Error fetching subcategories",
        });
    }
};