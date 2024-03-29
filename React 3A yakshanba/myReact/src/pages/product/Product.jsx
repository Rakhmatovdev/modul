import React from "react";
import { useFetch } from "../../hook/useFetch";
import { NavLink } from "react-router-dom";

const Product = () => {
  const {
    data: products,
    isPending: loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products`);

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {products &&
              products.map((product) => {
                return (
                  <div className="col mb-5" key={product.id}>
                    <div className="card h-100">
                      <img
                        className="card-img-top h-50"
                        src={product.image}
                        alt={product.description}
                      />
                      <div className="card-body ">
                        <div className="text-center">
                          <h5 className="fw-bolder">
                            {product.title.slice(0, 10)}
                          </h5>
                          <h5 >Category:<b className="text-uppercase"> {(product.category)}</b></h5>
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <h4>{product.price}</h4>
                        <div className="text-center">
                          <NavLink className="btn btn-outline-dark mt-auto" to={`/product/${product.id}`}>
                            View options
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
