import { createSelector } from "reselect";

const CollectionIdMap = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const shopSelector = createSelector([selectShop], (shop) => shop);

export const selectCollection = (collectionUrlParam) =>
  createSelector([shopSelector], (collections) =>
    collections.find(
      (collection) => collection.id === CollectionIdMap[collectionUrlParam]
    )
  );
