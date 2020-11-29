import { takeLatest, put, all, call } from 'redux-saga/effects';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure } from './user.actions';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase';
import CONSTANT_TYPES from '../redux.types';
import { clearCartItems } from '../cartItems/cartItems.action';

export function* getSnapShotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const snapShot = yield userRef.get();
        yield put(signInSuccess({
            id: snapShot.id,
            ...snapShot.data()
        }))
    } catch (e) {
        yield put(signInFailure(e.message))
    }
}
export function* signInWithGoogle() {

    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield call(getSnapShotFromUserAuth, user);
        yield put(clearCartItems());
    } catch (e) {
        yield put(signInFailure(e.messge))
    }

}

export function* signInWithEmail({ payload: { email, password } }) {

    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield call(getSnapShotFromUserAuth, user);
        yield put(clearCartItems());
    } catch (e) {
        yield put(signInFailure(e.message))
    }
}
export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());


    } catch (e) {
        yield put(signOutFailure(e.message))
    }
}
export function* signUpWithEmailAndPassword({ payload: { displayName, email, password } }) {

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user, { displayName });
        const snapShot = yield userRef.get();
        yield put(signUpSuccess({
            id: snapShot.id,
            ...snapShot.data()
        }))

    } catch (e) {
        yield put(signUpFailure(e.message))
    }



}

export function* checkUserSession() {
    try {
        const userAuth = getCurrentUser();
        if (!userAuth) return;
        yield put(getSnapShotFromUserAuth(userAuth))
    } catch (e) {
        yield put(signInFailure(e.message))
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(CONSTANT_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(CONSTANT_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}
export function* onSignOut() {
    yield takeLatest(CONSTANT_TYPES.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession() {
    yield takeLatest(CONSTANT_TYPES.CHECK_USER_SESSION, checkUserSession)
}
export function* onSignUpWithEmailAndPasswird() {
    yield takeLatest(CONSTANT_TYPES.SIGN_UP_START, signUpWithEmailAndPassword);
}
export function* userSagas() {
    yield all([call(onSignOut), call(onGoogleSignInStart), call(onSignOut), call(onCheckUserSession), call(onEmailSignInStart), call(onSignUpWithEmailAndPasswird)])
}