import React from 'react'
import '../../assets/stylesheets/productShow.css'
import ProductShowInfos from '../../components/productsComponents/ProductShowInfos'

export default function show() {
  return (
    <div className="productShow">
    <div class="container py-4 my-4 mx-auto d-flex flex-column">
        <div class="header">
            <div class="row r1">
                <div class="col-md-9 abc">
                    <h1>Tyre Mountain Cycle 21</h1>
                </div>
                <div class="col-md-3 text-right pqr"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                <p class="text-right para">Based on 250 Review</p>
            </div>
        </div>
        <div class="container-body mt-4">
            <div class="row r3">
                <ProductShowInfos />
            <div class="col-md-7"> <img src="https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDTORADO-MUSCUTORA65799297FD22C/1564571511644_0.jpg" width="90%" height="95%"/> </div>
            </div>
        </div>
        <div class="footer d-flex flex-column mt-5">
            <div class="row r4">
                <div class="col-md-2 myt des"><a href="#">Description</a></div>
                <div class="col-md-2 myt "><a href="#">Review</a></div>
                <div class="col-md-2 mio offset-md-4"><a href="#">ADD TO CART</a></div>
                <div class="col-md-2 myt "><button type="button" class="btn btn-outline-warning"><a href="#">BUY NOW</a></button></div>
            </div>
        </div>
    </div>
    </div>
  )
}
