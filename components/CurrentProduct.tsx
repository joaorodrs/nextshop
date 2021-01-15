import styles from '../styles/components/CurrentProduct.module.css'

const CurrentProduct: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>Something</h1>
        <h1 className={styles.productPrice}>R$ 49,90</h1>
      </div>
      <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

      <button className={styles.addToCartButton}>
        Add to cart
      </button>
    </main>
  )
}

export default CurrentProduct