import styles from '../styles/components/ProductList.module.css'

import productsMock from '../mock/products.json'

const ProductList: React.FC = () => {
  const products = productsMock

  return (
    <div className={styles.container}>
      {products.map(product => (
        <>
          <div />
          <div className={styles.productContainer}>
            <h3>{product.productName}</h3>
            <p>{product.productPrice}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default ProductList