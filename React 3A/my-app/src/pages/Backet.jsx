import React, { Fragment } from "react";
import { useBacket } from "../context/AuthContext";

const Backet = () => {
  const { backet ,handleDelete} = useBacket();
const handle =(id)=>{

}
 
  return (
    <>
      {backet &&
        backet.map((product, index) => {
          return (
            <Fragment key={index}>
              <div className=" mb-5 " key={product.id}>
                <div className="card h-100  row d-flex card-group">
                  <img
                    className="card-img-top h-50 col-6"
                    src={product.image}
                    alt={product.description}
                    style={{
                      width: "10%",
                      maxHeight: "50%",
                      display: "inline",
                    }}
                  />
                  <div className="card-title p-4 col-7 ">
                    <div className="text-center">
                      <div className="d-flex gap-3">
                        {" "}
                        <h2 className="fw-bolder mb-5 bi-layout-text-sidebar">
                          {(product.title).slice(0,10)}
                        </h2>{" "}
                        <div className="btn btn-success  ignore-none h-25 w-50">
                          Have counts: {product.rating.count}
                        </div>
                        <button className="btn btn-primary  ignore-none h-25 w-50">
                          add
                        </button>
                        <button className="btn btn-danger  ignore-none h-25 w-20" onClick={()=>handleDelete(product.id)}>
                          del
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
    </>
  );
};

export default Backet;
