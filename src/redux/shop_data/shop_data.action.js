import CONSTANT_TYPES from '../redux.types';

export const fetchCollectionStart = () => ({
    type: CONSTANT_TYPES.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: CONSTANT_TYPES.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})
export const fetchCollectionsFailure = error => ({
    type: CONSTANT_TYPES.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

