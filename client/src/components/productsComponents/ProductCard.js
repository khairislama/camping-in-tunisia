import React from 'react'
import '../../assets/stylesheets/productCard.css'

export default function ProductCard() {
  return (
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="pic-1" 
                        src="https://bestjquery.com/tutorial/product-grid/demo150/images/img-2.jpg"
                    />
                </a>
                <span class="product-sale-label">Sale!</span>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-shopping-bag"></i> Add to cart</a></li>
                    <li><a href="#"><i class="fa fa-search"></i> Quick View</a></li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">Women's Cotton Top</a></h3>
                <div class="price"><span>$85.55</span>$79.99</div>
            </div>
        </div>
    </div>
  )
}
