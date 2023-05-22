import { productActions } from "../reducers/productReducer";
function getProducts(keyword) {
  return async (dispatch, getState) => {
    let error = "";
    let url = `https://my-json-server.typicode.com/yyoonngg/yong-hnm/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    if (data.length < 1) {
      if (keyword !== "") {
        error = `${keyword}와 일치하는 상품이 없습니다`;
      } else {
        error = "결과가 없습니다";
      }
    }
    // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data, error } });
    dispatch(productActions.getAllProduct({ data }, { error }));
  };
}

function getDetailProducts(params) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/yyoonngg/yong-hnm/products/${params.id}`;
    let response = await fetch(url);
    let data = await response.json();
    //dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
    dispatch(productActions.getDetailProduct({ data }));
  };
}

export const productAction = { getProducts, getDetailProducts };
