import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import brandReducer from './brandReducer';
import subcategoryReducer from './subcategoryReducer';
import productsReducer from './productsReducer';
import authReducer from './authReducer';
import reviewReducer from './reviewReducer';
import wishListReducer from './wishListReducer'; // Renamed for consistency
import couponReducer from './couponReducer';
import userAddressesReducer from './userAddressesReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    categories: categoryReducer, // Changed to plural for consistency
    brands: brandReducer, // Changed to plural for consistency
    subcategories: subcategoryReducer, // Changed to plural for consistency
    products: productsReducer, // Changed to plural for consistency
    auth: authReducer, // Changed to singular for clarity
    reviews: reviewReducer, // Changed to plural for consistency
    wishList: wishListReducer, // Changed to singular for clarity
    coupons: couponReducer, // Changed to plural for consistency
    userAddresses: userAddressesReducer, // Changed to plural for consistency
    cart: cartReducer // Changed to singular for clarity
});

export default rootReducer;