import { actionType } from "../contant/action-type";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case actionType.SELECTED_PRODUCTD:
      return { ...state, ...payload };
    case actionType.REMOVE_SELECTED_PRODUCTD:
      return {};
    default:
      return state;
  }
};
