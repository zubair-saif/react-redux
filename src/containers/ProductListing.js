import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";



function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const getAllProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(`error ${err}`);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ProductComponent />
      </div>
    </div>
  );
}

export default ProductListing;
