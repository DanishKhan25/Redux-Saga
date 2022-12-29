import React from "react";
import Buttons from "./Buttons";
import "./Card.css";

const Card = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="card-container">
      <div className="img-wrapper">
        <img src={image} alt="product-img" width={200} />
      </div>
      <h3>{title}</h3>
      <p>Price:- {price}</p>
      <p>category:- {category}</p>
      <p>rating:- {rating.rate / rating.count}</p>
      <p>description:- {description}</p>
      <Buttons />
    </div>
  );
};

export default Card;
