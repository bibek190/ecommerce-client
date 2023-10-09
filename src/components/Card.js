import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Card = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    // console.log(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between gap-5">
      {product.map((item, i) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={i}>
            <img
              className="card-img-top"
              src={item.image}
              alt="Card image cap"
              height={"250px"}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p>
                <b>Price:$</b>
                {item.price}
              </p>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-primary">
                Add to Cart <AiOutlineShoppingCart className="fs-3 mx-2" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
