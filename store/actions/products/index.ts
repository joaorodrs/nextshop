import { PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_SHOW } from '..'

export const productAdd = (product) => ({
  type: PRODUCT_ADD,
  payload: product
})

export const productRemove = (product) => ({
  type: PRODUCT_REMOVE,
  payload: product
})

export const productShow = (product) => ({
  type: PRODUCT_SHOW,
  payload: product
})