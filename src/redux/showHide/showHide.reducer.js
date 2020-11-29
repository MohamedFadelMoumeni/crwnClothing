import CONSTANT_TYPES from '../redux.types';
const INITIAL_STATE = {
    show: false
}
const showHideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.SHOW_HIDE_DROP:
            return {
                ...state,
                show: !state.show
            }
        default:
            return state;
    }
}

export default showHideReducer;