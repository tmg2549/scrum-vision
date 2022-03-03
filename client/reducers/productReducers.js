import * as types from "../constants/actionTypes";

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  newLocation: "",
  synced: true,
};

const marketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SYNC_MARKETS:
      return {
        ...state,
        synced: true,
      };

    case types.LOAD_MARKETS:
      return {
        ...state,
        totalMarkets: action.payload.length,
        totalCards: action.payload.reduce((res, m) => res + m.cards, 0),
        marketList: action.payload,
      };

    default:
      return state;
  }
};

export default marketsReducer;