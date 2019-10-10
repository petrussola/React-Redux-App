import * as types from "./actionTypes";

const initialListPeople = [];
const initialSelectedPerson = "";

export function listPeopleReducer(listPeople = initialListPeople, action) {
  switch (action.type) {
    case types.ADD_PEOPLE_LIST:
        return [action.payload.listPeopleApi];
    default:
      return listPeople;
  }
}

export function selectPersonReducer(selectedPerson = initialSelectedPerson, action) {
    switch (action.type) {
        case types.SELECT_PERSON:
            return action.payload.name;
        default:
            return selectedPerson;
    }
}
