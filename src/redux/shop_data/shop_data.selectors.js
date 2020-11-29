import { createSelector } from 'reselect';



const selectData = state => state.shop_data;




export const selectShopData = createSelector(
    [selectData],
    (shop_data) => shop_data.SHOP_DATA
)

export const selectCollection = urlParams => createSelector(
    [selectShopData],
    (SHOP_DATA) => SHOP_DATA ? SHOP_DATA[urlParams] : null
)

export const selectObj = createSelector(
    [selectShopData],
    (SHOP_DATA) => SHOP_DATA ? Object.keys(SHOP_DATA).map(key => SHOP_DATA[key]) : []
)


export const selectIsCollectionFetching = createSelector(
    [selectData],
    (shop_data) => shop_data.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectData],
    (shop_data) => !!shop_data.SHOP_DATA
)