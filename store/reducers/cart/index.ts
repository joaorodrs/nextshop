import { HYDRATE } from 'next-redux-wrapper'
import { Product } from '../../../components/CurrentProduct'
import { PRODUCT_ADD, PRODUCT_REMOVE } from '../../actions'

const initialState: Product[] = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.product }
    case PRODUCT_ADD:
      return [ ...state, { ...action.payload } ]
    case PRODUCT_REMOVE:
      return state.filter(product => product?.productId !== action.payload.productId)
    default:
      return state
  }
}

export default reducer