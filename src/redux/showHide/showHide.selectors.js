import { createSelector } from 'reselect';

const selectToggler = state => state.showHide;


export const selectShowHide = createSelector(
    [selectToggler],
    (showHide) => showHide.show
)