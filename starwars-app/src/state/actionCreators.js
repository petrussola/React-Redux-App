import * as types from "./actionTypes";
import axios from "axios";

const starWarsApi = "https://swapi.co/api/people/";

export function getPeople(listPeopleApi) {
  return {
    type: types.ADD_PEOPLE_LIST,
    payload: listPeopleApi
  };
}

export const fetchPeople = () => dispatch => {
  axios
    .get(starWarsApi)
    .then(res => {
      dispatch(getPeople(res.data.results));
    })
    .catch(error => {
      console.log("api error!");
    });
};
