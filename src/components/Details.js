import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, title, img, color, price, size, info, inCart}
                     = value.detailProduct;
                     return (
                         <div className="container py-5">
                             {/**product img */}
                             <div className="row">
                                 <div className="col-10 mx-auto col-md-6 my-3">
                                     <img src={img} className="img-fluid" alt="product" />
                                 </div>
                                 {/**product text */}
                                 <div className="col-10 mx-auto col-md-6 my-3
                                 text-capitalize">
                                     <h2>{title}</h2>
                                     <h6 className="text-blue"><strong>price: <span>$</span>{price}</strong></h6>
                                     <h6 className="text-blue"><strong>color: {color}</strong></h6>
                                     <h6 className="text-blue"><strong>size: {size}</strong></h6>
                                         <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                             some info about the product:
                                         </p>
                                         <p className="text-muted lead">{info}</p>
                                         <p>NOTE: The dresses can be motified to your desire. Please email me your measurements after you place your order. 
                                             Or contact me if you need to modify the design or if you would like another style of dress to be made. 
                                         </p>
                                         {/**buttons */}
                                         <div>
                                             <Link to="/">
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                             </Link>
                                             <ButtonContainer
                                             cart
                                             disabled={inCart?true:false}
                                             onClick={()=>{
                                                 value.addToCart(id)
                                             }}
                                             >
                                                 {inCart ? "inCart" : "add to cart"}
                                             </ButtonContainer>
                                         </div>
                                 </div>
                             </div>
                         </div>
                     )
                }}
            </ProductConsumer>
        );
    };
};
