import { combineReducers } from "redux";
import { productReducers,selectedProductReducers } from "./productReducer";


export const reducers=combineReducers({
    allProducts:productReducers,
    product:selectedProductReducers
});

