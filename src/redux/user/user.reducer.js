import CONSTANT_TYPES from '../redux.types';
const INITIAL_STATE = {
    currentUser: null,
    errorMessage: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CONSTANT_TYPES.SIGN_UP_SUCCESS:
        case CONSTANT_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: ''
            }
        case CONSTANT_TYPES.SIGN_OUT_FAILURE:
        case CONSTANT_TYPES.SIGN_UP_FAILURE:
        case CONSTANT_TYPES.SIGN_IN_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case CONSTANT_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                errorMessage: ''
            }

        default:
            return state
    }
}

export default userReducer;