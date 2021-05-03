import { createSelector } from "reselect";

const selectDirecotry = (state) => state.direcotry;

export const directorySelector = createSelector(
  [selectDirecotry],
  (directory) => directory.sections
);
