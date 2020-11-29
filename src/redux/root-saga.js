import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop_data/shop_data.saga';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas)
    ])
}