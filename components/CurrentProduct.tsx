import { useSelector, useDispatch } from 'react-redux'
import { productAdd } from '../store/actions/cart'
import styles from '../styles/components/CurrentProduct.module.css'

export interface Product {
  productId: number,
  productName: string,
  productDescription: string,
  productPrice: number
}

interface RootState {
  products: Product
}

const CurrentProduct: React.FC = () => {
  const products = useSelector((state: RootState) => state.products)

  const dispatch = useDispatch()

  function addProductToCart() {
    dispatch(productAdd(products))
  }

  return (
    <main className={styles.main}>
      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>{products.productName || 'Selecione um produto!'}</h1>
        {products.productName && <h1 className={styles.productPrice}>{(products.productPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>}
      </div>
      <p className={styles.productDescription}>{products.productDescription}</p>

      {products.productName && (
        <button className={styles.addToCartButton} onClick={addProductToCart}>
          Add to cart
        </button>
      )}
    </main>
  )
}

export default CurrentProduct