import { call, put, takeLatest, all } from 'redux-saga/effects';
import CONSTANT_TYPES from '../redux.types';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop_data.action';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('shop');
        const snapShot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapShotToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionMap))
    } catch (e) {
        yield put(fetchCollectionsFailure(e.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        CONSTANT_TYPES.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}
