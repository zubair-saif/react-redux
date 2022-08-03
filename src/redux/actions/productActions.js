import { actionType } from "../contant/action-type";

export const setProducts = (products) => {
  return {
    type: actionType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionType.SELECTED_PRODUCTD,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionType.REMOVE_SELECTED_PRODUCTD
  };
};
