import { FETCH_HOUSE, FETCH_HOUSES_PAGE, FETCH_PERSON } from "../constants";


export const fetchHousesPage = page => ({
  type: FETCH_HOUSES_PAGE,
  payload: page,
  callAPI: `/api/houses?page=${page}&pageSize=10`
});

export const fetchHouse = id => ({
  type: FETCH_HOUSE,
  callAPI: `/api/houses/${id}`
});

export const fetchPerson = id => ({
  type: FETCH_PERSON,
  callAPI: `/api/characters/${id}`
});
