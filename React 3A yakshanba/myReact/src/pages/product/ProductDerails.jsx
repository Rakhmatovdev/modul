import React from "react";
import { useFetch } from "../../hook/useFetch";
import { useParams } from "react-router";
import { useBacket } from "../../context/AuthContext";

const ProductDerails = () => {
  const { addToBacket }=useBacket()
  const { id } = useParams();
  
  const {
    data,
    isPending,
    error,
  } = useFetch(`https://fakestoreapi.com/products?id==${id}`);
  console.log(data);
const handleBuy=()=>{
  addToBacket(...data)
}
  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {data &&
        data.map((product) => {
          return (
            <div className=" mb-5 " key={product.id}>
              <div className="card h-100  row d-flex card-group">
                <img
                  className="card-img-top h-50 col-6"
                  src={product.image}
                  alt={product.description}
                  style={{ width: "30%", maxHeight: "50%", display: "inline" }}
                />
                <div className="card-title p-4 col-7 ">
                  <div className="text-center ">
                    <div className="d-flex">
                      {" "}
                      <h2 className="fw-bolder mb-5 bi-layout-text-sidebar">
                        {product.title}
                      </h2>{" "}
                      <div className="btn btn-success  ignore-none h-25 w-50"> Counts: {product.rating.count}</div>
                    </div>
                    <h5 className="card-group">
                      Description: {product.description}
                    </h5>
                  </div>

                  <h3 className="btn btn-warning m-5">
                    Rating: {product.rating.rate}
                  </h3>
                  <button className="btn btn-primary m-5" onClick={handleBuy}>Buy: {product.price}</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDerails;
