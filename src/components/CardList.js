import React, { useEffect } from "react";
import Card from "./Card";
import "./Cardlist.css";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../redux/action";

const CardList = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);
  console.log(products);
  //  const { title, price, description, category, image, rating } = products;

  return (
    <div className="card-list">
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardList;
