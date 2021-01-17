import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/components/Cart.module.css'

import { FiShoppingCart, FiX } from 'react-icons/fi'

import { Product } from './CurrentProduct'
import { productRemove } from '../store/actions/cart'
import { productShow } from '../store/actions/products'

interface RootState {
  cart: Product[]
}

const Cart: React.FC = () => {
  const cartProducts = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  function removeProductFromCart(product: Product) {
    dispatch(productRemove(product))
  }

  function sendToCurrentProduct(product: Product) {
    dispatch(productShow(product))
  }

  return (
    <main className={styles.main}>
      <FiShoppingCart size={35} color="green" />
      <div className={styles.cartProductsContainer}>
        {cartProducts.map(product => (
          <div key={product.productId} className={styles.productContainer}>
            <button onClick={() => removeProductFromCart(product)}>
              <FiX size={22} color="gray"/>
            </button>
            
            <div className={styles.productInfo} onClick={() => sendToCurrentProduct(product)}>
              <h3>{product.productName}</h3>
              <p>{(product.productPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
          </div>
        ))}
      </div>
      <button>
        Finalizar
      </button>
    </main>
  )
}

export default Cart