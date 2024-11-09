import { 
    CREATE_NEW_USER, 
    UPDATE_USER_PASSWORD, 
    UPDATE_USER_PROFILE, 
    RESET_PASSWORD, 
    VERIFY_PASSWORD, 
    FORGET_PASSWORD, 
    LOGIN_USER, 
    GET_CURRENT_USER 
} from '../type';

const initialState = {
    create: null,
    login: null,
    current: null,
    forgetPassword: null,
    verifyPassword: null,
    resetPassword: null,
    userProfile: null,
    userChangePassword: null,
    loading: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                create: action.payload,
            };
        case LOGIN_USER:
            return {
                ...state,
                login: action.payload,
            };
        case GET_CURRENT_USER:
            return {
                ...state,
                current: action.payload,
            };
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            };
        case VERIFY_PASSWORD:
            return {
                ...state,
                verifyPassword: action.payload,
            };
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            };
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };
        case UPDATE_USER_PASSWORD:
            return {
                ...state,
                userChangePassword: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;