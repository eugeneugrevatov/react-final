import { FETCH_HOUSES_PAGE, START, SUCCESS } from "../constants";
import { OrderedMap, Record } from "immutable";

const HouseRecord = Record({
  id: "",
  name: "",
  words: "",
  swornMembers: []
});

const HousesPageRecord = Record({
  entities: new OrderedMap(),
  isLoaded: false,
  isLoading: false
});

export default (housesState = new OrderedMap(), action) => {
  const { type, payload, response } = action;
  switch (type) {
    case FETCH_HOUSES_PAGE + START:
      return housesState.set(payload, HousesPageRecord({ isLoading: true }));

    case FETCH_HOUSES_PAGE + SUCCESS:
      return housesState
        .setIn([payload, 'entities'], response.map(house => HouseRecord({ id: house.url.split('/').pop(), ...house })))
        .setIn([payload, 'isLoading'], false)
        .setIn([payload, 'isLoaded'], true);

    default:
      return housesState;
  }
}
