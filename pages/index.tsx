import React from 'react'
import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

import ProductList from '../components/ProductList'
import CurrentProduct from '../components/CurrentProduct'
import Cart from '../components/Cart'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>NextShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.cardContainer}>
          <ProductList />
          <CurrentProduct />
          <Cart />
        </div>
      </main>
    </div>
  )
}

export default Home