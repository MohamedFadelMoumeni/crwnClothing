import CONSTANT_TYPES from '../redux.types';


const INITIAL_STATE = {
    SHOP_DATA: null,
    isFetching: false,
    errorMessage: ''
}

const shopDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case CONSTANT_TYPES.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                SHOP_DATA: action.payload,
                isFetching: false
            }
        case CONSTANT_TYPES.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default shopDataReducer;
