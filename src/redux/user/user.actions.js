import CONSTANT_TYPES from '../redux.types';


export const googleSignInStart = () => ({
    type: CONSTANT_TYPES.GOOGLE_SIGN_IN_START
})

export const signInSuccess = user => ({
    type: CONSTANT_TYPES.SIGN_IN_SUCCESS,
    payload: user
})
export const signInFailure = error => ({
    type: CONSTANT_TYPES.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = emailAndpassword => ({
    type: CONSTANT_TYPES.EMAIL_SIGN_IN_START,
    payload: emailAndpassword
})
export const signOutStart = () => ({
    type: CONSTANT_TYPES.SIGN_OUT_START
})
export const signOutSuccess = () => ({
    type: CONSTANT_TYPES.SIGN_OUT_SUCCESS
})
export const signOutFailure = () => ({
    type: CONSTANT_TYPES.SIGN_OUT_FAILURE
})
export const checkUserSession = () => ({
    type: CONSTANT_TYPES.CHECK_USER_SESSION
})
export const signUpStart = userData => ({
    type: CONSTANT_TYPES.SIGN_UP_START,
    payload: userData
})
export const signUpSuccess = user => ({
    type: CONSTANT_TYPES.SIGN_UP_SUCCESS,
    payload: user
})
export const signUpFailure = error => ({
    type: CONSTANT_TYPES.SIGN_UP_FAILURE,
    paylod: error
})