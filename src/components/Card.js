import React, { useEffect, useState } from "react";

const Card = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    // console.log(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between gap-5">
      {product.map((item) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={item.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
