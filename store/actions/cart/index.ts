import { PRODUCT_ADD, PRODUCT_REMOVE } from '..'

export const productAdd = (product) => ({
  type: PRODUCT_ADD,
  payload: product
})

export const productRemove = (product) => ({
  type: PRODUCT_REMOVE,
  payload: product
})