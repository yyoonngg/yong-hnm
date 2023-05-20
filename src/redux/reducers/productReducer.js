let initialState = {
  products: [],
  error: "",
  detailProduct: [],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, products: payload.data, error: payload.error };
    case "GET_PRODUCT_DETAIL_SUCCESS":
      return { ...state, detailProduct: payload.data };
    case "ERROR":
      return { ...state, error: payload.err };
    default:
      return { ...state };
  }
}

export default productReducer;
