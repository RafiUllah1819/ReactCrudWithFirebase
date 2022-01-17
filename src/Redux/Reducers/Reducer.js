import {
  ADDRECORD,
  DELELTERECORD,
  EDITRECORD,
  UPDATERECORD,
} from "../Constants/index";

const initialState = {
  edit: false,
  allData: [],
};

export const Reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADDRECORD:
      return {
        ...state,
        allData: [...state.allData, actions.payload],
      };
    case DELELTERECORD:
      return {
        ...state,
      };
    case EDITRECORD:
      return {
        ...state,
      };
    case UPDATERECORD:
      return {
        ...state,
      };
    default:
      return state;
  }
};
