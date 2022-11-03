import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import './ProductDescription.css'

const ProductDescription = () => {
   const location = useLocation()
   const product=location.state
   console.log(product.image)

    return (
        <Container md={4} l={4} className='product-description'>
            <div className='image-container'>
                <img className='image-desc' src={product.image} alt=""></img>
            </div>
            <br></br>
            <div  className='description-container'>
            
               
                <div className='title-des'><h4>{product.title}</h4><div><h5><span id='rating'>{product.rating.rate}</span>  out of  {product.rating.count} reviews </h5></div></div>
                <div className='description-des'>{product.description}</div>
                <br></br>
                

                
                <div className='price-des'><h2>$ {product.price}</h2></div>
                <Button variant='info' className='checkout-btn'>Checkout</Button>
                
                
                
            </div>
            
        </Container>
    );
}

export default ProductDescription;
