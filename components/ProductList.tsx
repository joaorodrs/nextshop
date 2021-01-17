import { useDispatch } from 'react-redux'
import styles from '../styles/components/ProductList.module.css'

import { productShow } from '../store/actions/products'
import productsMock from '../mock/products.json'
import { Product } from './CurrentProduct'

const ProductList: React.FC = () => {
  const products = productsMock
  const dispatch = useDispatch()

  function sendToCurrentProduct(product: Product) {
    dispatch(productShow(product))
  }

  return (
    <div className={styles.container}>
      {products.map(product => (
        <div key={product.productId} className={styles.productContainer} onClick={
          () => sendToCurrentProduct(product)
        }>
          <h3>{product.productName}</h3>
          <p>{(product.productPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList