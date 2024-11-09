import { 
    CREATE_REVIEW, 
    UPDATE_REVIEW, 
    DELETE_REVIEW, 
    ALL_REVIEW_PRODUCT 
} from '../type';

const initialState = {
    reviews: [],
    allReviewProduct: [],
    loading: true,
    error: null,
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
                loading: false,
                error: null,
            };
        case ALL_REVIEW_PRODUCT:
            return {
                ...state,
                allReviewProduct: action.payload,
                loading: false,
                error: null,
            };
        case DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.payload.id),
                loading: false,
                error: null,
            };
        case UPDATE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.map(review => 
                    review.id === action.payload.id ? action.payload : review
                ),
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export default reviewReducer; // Ensure you export the reducer