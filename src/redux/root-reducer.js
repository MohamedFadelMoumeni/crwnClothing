import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import showHideReducer from './showHide/showHide.reducer';
import cartItemsReducer from './cartItems/cartItems.reducer';
import shopDataReducer from './shop_data/shop_data.reducer';
import sectionReducer from './section_data/section_data.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['items']
}

const rootReducer = combineReducers({
    user: userReducer,
    showHide: showHideReducer,
    items: cartItemsReducer,
    shop_data: shopDataReducer,
    section_data: sectionReducer
});

export default persistReducer(persistConfig, rootReducer);