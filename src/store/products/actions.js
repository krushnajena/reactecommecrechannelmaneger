import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
} from './actionTypes'
export const getProducts=()=>({
    type:GET_PRODUCTS
})


export const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
})

export const getProductsFail = error => ({
    type: GET_PRODUCTS_FAIL,
    payload: error,
})