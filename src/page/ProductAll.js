import React, { useEffect, useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const products = useSelector((state) => state.product.products);
  const [query, setQuery] = useSearchParams();
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();

  const getProducts = () => {
    try {
      let keyword = query.get("q") || "";
      dispatch(productAction.getProducts(keyword));
    } catch (err) {
      dispatch({type:"ERROR", payload: err.message});
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
