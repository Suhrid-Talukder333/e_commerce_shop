import { createSelector } from "reselect";

const user = (state) => state.user;
export const selectCurrentUser = createSelector(
  [user],
  (item) => item.currentUser
);
