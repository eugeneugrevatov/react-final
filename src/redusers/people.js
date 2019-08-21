import { OrderedMap, Record } from "immutable";
import { FETCH_PERSON, START, SUCCESS } from "../constants";
import React from "react";

const PersonRecord = Record({
  id: "",
  name: "",
  gender: "",
  culture: "",
  born: "",
  died: "",
  isLoaded: false,
  isLoading: false
});

export default (peopleState = new OrderedMap(), action) => {
  const { type, payload, response } = action;
  switch (type) {
    case FETCH_PERSON + START:
      return peopleState.set(payload, PersonRecord({ isLoading: true }));

    case FETCH_PERSON + SUCCESS:
      return peopleState.set(payload, PersonRecord({ payload, ...response, isLoading: false, isLoaded: true }));

    default:
      return peopleState;
  }
}
