import React from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/productsComponents/ProductCard'

export default function allProducts() {
  return (
    <div className="container">
      <Header />
        <div class="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}
