import { createSelector } from 'reselect';

const selectSection = state => state.section_data;

export const selectSectionData = createSelector(
    [selectSection],
    (section_data) => section_data.sections
)