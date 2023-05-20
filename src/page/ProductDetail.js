import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Dropdown, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();
  let params = useParams();
  const detailProduct = useSelector((state) => state.product.detailProduct);
  const [size, setSize] = useState(null);

  const getProductDetail = () => {
    try {
      dispatch(productAction.getDetailProducts(params));
    } catch (err) {
      console.log(err)
      dispatch({ type: "ERROR", payload: err });
    }
  };

  const sizeSelect = (event) => {
    setSize(event.target.innerText);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col className="detail-image">
            <img width={350} src={detailProduct?.img} />
          </Col>
          <Col>
            <div className="product-info">{detailProduct?.title}</div>
            <div className="product-info">₩ {detailProduct?.price}</div>
            <div className="choice">
              {detailProduct?.choice ? "Conscious Choice" : ""}
            </div>

            <Dropdown className="mt-3">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {size == null ? "사이즈 선택" : size}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={sizeSelect}>S</Dropdown.Item>
                <Dropdown.Item onClick={sizeSelect}>M</Dropdown.Item>
                <Dropdown.Item onClick={sizeSelect}>L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button className="detail-button mt-3" variant="dark">
              추가
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
