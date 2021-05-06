export default function() {
  const initialState = {
    publicCategories: [],

    publicCollections: [],
    publicTopCollections: [],
    collectionTagList: [],
    currentCollection: null,
    offsetCollectionTagList: 0,

    publicProducts: [],
    currentProduct: [],

    myFavorites: [],

    myOrders: [],
    currentOrder: [],

    homepageData: [],

    collectionRankings: []
  };
  return initialState;
}
