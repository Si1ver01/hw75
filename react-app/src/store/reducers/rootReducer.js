import { DECODE, ENCODE } from "../actions/codeActions";

const initialState = {
  encode: "",
  decode: ""
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ENCODE:
      return {
        ...state,
        decode: action.payload,
        encode: null
      };
    case DECODE:
      return {
        ...state,
        encode: action.payload,
        decode: null
      };
    default:
      return state;
  }
}
