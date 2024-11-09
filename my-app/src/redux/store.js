import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';


const initialState = {}; // Corrected spelling from 'initailState' to 'initialState'

const middleware = [thunk]; // Corrected spelling from 'meddleware' to 'middleware'

// Create the Redux store with the root reducer, initial state, and middleware
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
