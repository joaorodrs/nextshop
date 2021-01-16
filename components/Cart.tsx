import styles from '../styles/components/Cart.module.css'

import { FiShoppingCart, FiX } from 'react-icons/fi'

import productsMock from '../mock/products.json'

const Cart: React.FC = () => {
  const products = productsMock

  return (
    <main className={styles.main}>
      <FiShoppingCart size={40} color="green" />
      <div className={styles.cartProductsContainer}>
        {products.map(product => (
          <>
            <div key={product.productId} className={styles.productContainer}>
              <button>
                <FiX size={22} color="gray"/>
              </button>
              
              <div className={styles.productInfo}>
                <h3>{product.productName}</h3>
                <p>{product.productPrice}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <button>
        Checkout
      </button>
    </main>
  )
}

export default Cart