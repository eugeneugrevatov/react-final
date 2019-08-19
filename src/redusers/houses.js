import { FETCH_HOUSES, START, SUCCESS } from "../constants";

const defaultState = {
  entities: [],
  page: 1,
  isLoading: false,
  isLoaded: false,
};

export default (housesState = defaultState, action) => {
  const { type, response } = action;
  switch (type) {
    case FETCH_HOUSES + START: {
      return { ...housesState, isLoading: true }
    }
    case FETCH_HOUSES + SUCCESS: {
      return { entities: response.map(h => h.name), isLoading: false }
    }

    // case FETCH_HOUSE: {
    //
    // }

    default:
      return housesState;

  }
}