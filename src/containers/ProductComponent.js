import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, category, image, price } = product;
    return (
      <div className="card-group col-md-3 mt-4" key={id}>
        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
          <div className="card h-100 p-3">
            <img src={image} className="card-img-top" alt={title} />
            <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <a href="#" className="btn btn-primary">
                ${price}
              </a>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
