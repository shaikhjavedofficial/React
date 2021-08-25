export const ProductReducer = (state = {
  product: []
}, action) => {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: [...state.product, ...action.data]
    }
  }
  if (action.type === "SELECTED_PROD_ID") {
    return {
      ...state,
      selectedId: action.data,
    }
  }
  if (action.type === "REMOVE_PRODUCT") {
    // const newData = state.product.filter(item => item !== action.data);
    state.product.pop()
    return {
      // ...state,
      product: [...state.product],
    }
  }
  return state;
};