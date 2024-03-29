import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProductCard.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const ProductCard = (props) => {

    
    

    return (
        
        <Row className='product-row'>
        
            <Col className='image-col'><img className='image' src={props.src} alt=""></img></Col>
            <Col sm={8} md={8} className='description-col'>
            <h5><strong>{props.title}</strong></h5>
            <h5><span id='rating'>{props.rating}</span> out of {props.ratingCount} reviews </h5>
            <br></br>
            <p className='description'>{props.description}</p>
            </Col>
            
            <Col className='price addToCart'>
                <h3>$ {props.price}</h3>
                <br></br>
                <Button className='add-to-cart' >Buy Now</Button>
            </Col>
        </Row>
        
            
        
    );
}

export default ProductCard;
