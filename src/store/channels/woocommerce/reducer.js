import {
  POST_INTIGRATE_WOOCOMMERCE_CHANNEL,
  POST_INTIGRATE_WOOCOMMERCE_CHANNEL_SUCCESS,
  POST_INTIGRATE_WOOCOMMERCE_CHANNEL_FAIL,
  } from "./actionTypes"
  
  const initialState = {
    error: "",
    loading: false,
  }
  
  const woocommerce = (state = initialState, action) => {
    switch (action.type) {
      case POST_INTIGRATE_WOOCOMMERCE_CHANNEL:
        state = {
          ...state,
          loading: true,
        }
        break
      case POST_INTIGRATE_WOOCOMMERCE_CHANNEL_SUCCESS:
        state = {
          ...state,
          loading: false,
        }
        break
      case POST_INTIGRATE_WOOCOMMERCE_CHANNEL_FAIL:
        state = { ...state, error: action.payload, loading: false }
        break
      default:
        state = { ...state }
        break
    }
    return state
  }
  
  export default woocommerce
  