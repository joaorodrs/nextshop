import { PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_SHOW } from '..'

export const productShow = (product) => ({
  type: PRODUCT_SHOW,
  payload: product
})