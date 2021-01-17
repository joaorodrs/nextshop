import { HYDRATE } from 'next-redux-wrapper'
import { PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_SHOW } from '../../actions'

const initialState = {
  productId: null,
  productName: null,
  productDescription: null,
  productPrice: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.product }
    case PRODUCT_SHOW:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer