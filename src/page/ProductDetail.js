import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Dropdown, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [error, setError] = useState();
  let params = useParams();
  const [detailProduct, setDetailProduct] = useState([]);
  const [size, setSize] = useState(null);

  const getProductDetail = async () => {
    try {
      let url = `http://localhost:5000/products/${params.id}`;
      let response = await fetch(url);
      let data = await response.json();
      setDetailProduct(data);
    } catch (err) {
      setError(err.message);
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
                {size==null?"사이즈 선택":size}
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
