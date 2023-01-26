import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './ProductDescription.css'
import { addtoCart } from '../../features/cart';


const ProductDescription = () => {

const dispatch=useDispatch()
const[product,setProduct]=useState([]);

    const params=useParams()
    const id=params.productid
    console.log(params.productid)


//    const location = useLocation()
//    const product=location.state
//    console.log(product.image)

useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log('description' ,data);
      });
  }, [id]);

  const handleAddtoCart=(product)=>{
    dispatch(addtoCart(product))
    console.log('added',product)
  }

    return (
        <Container md={4} l={4} className='product-description'>
            <div className='image-container'>
                <img className='image-desc' src={product.image} alt=""></img>
            </div>
            <br></br>
            <div  className='description-container'>
            
               
                <div className='title-des'><h4>{product.title}</h4></div>
                <div className='description-des'>{product.description}</div>
                <br></br>
                

                
                <div className='price-des'><h2>$ {product.price}</h2></div>
                <Button variant='info' className='checkout-btn' onClick={()=>handleAddtoCart(product)}>Add to Cart</Button>
                
                
                
            </div>
            
        </Container>
    );
}

export default ProductDescription;
