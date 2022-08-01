import { combineReducers } from 'redux';

//import cartReducer from './CartReducers';
import cartReducer from './Reducers/cartSlice';

/* let reducers = combineReducers({
    cartReducer : cartReducer,
}); */

let reducers = combineReducers({
    cartReducer : cartReducer,
});

const rootReducer = (state , action ) => {
    return reducers(state, action);
}

export default rootReducer;