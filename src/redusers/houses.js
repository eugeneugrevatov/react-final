import { FETCH_HOUSES_PAGE, START, SUCCESS } from "../constants";
import { OrderedMap } from "immutable";

export default (housesState = new OrderedMap(), action) => {
  const { type, payload, response } = action;
  switch (type) {
    case FETCH_HOUSES_PAGE + START: {
      return housesState.set(payload,
        {
          entities: [],
          isLoading: true,
          isLoaded: false,
        });
    }
    case FETCH_HOUSES_PAGE + SUCCESS: {
      return housesState.set(payload,
        {
          entities: response.map(house => ({ id: house.url.split('/').pop(), name: house.name })),
          isLoading: false,
          isLoaded: true,
        });
    }

    // case FETCH_HOUSE: {
    //
    // }

    default:
      return housesState;

  }
}
