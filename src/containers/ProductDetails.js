import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";

function ProductDetails() {

  const { productId } = useParams();
  const state = useSelector((state) => state.product);
  const { id, title, category, image, price, description } = state;
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(`error ${err}`);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId]);

  return (
    <div className="mt-4 container">
      {Object.keys(state).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <small className="text-muted">{category}</small>
                </p>
                <a href="#" class="btn btn-primary">${price}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
