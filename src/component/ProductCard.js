import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/products/${item?.id}`);
  };
  return (
    <div className="product-card" onClick={goToDetail}>
      <img src={item?.img} />
      <div className="choice">{item?.choice ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new-product">{item?.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
