import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProductCard.css'
import { Button } from 'bootstrap';


const ProductCard = (props) => {

    var randomReviewCount=Math.floor(Math.random()*4000)

    return (
        <Container className='product-card '>
        <Row className='product-row'>
            <Col className='image-col'><img className='image' src={props.src} alt=""></img></Col>
            <Col sm={8} md={8} className='description-col'>
            <h5><strong>{props.title}</strong></h5>
            <h5><span id='rating'>{props.rating}</span> out of {randomReviewCount} & {props.ratingCount} reviews </h5>
            <br></br>
            <p >{props.description}</p>
            </Col>
            <Col className='price addToCart'>
                <h3>₹ {props.price}</h3>
                <br></br>
                
                <button className='add-to-cart'>Add to Cart</button>
            </Col>
        </Row>
            
        </Container>
    );
}

export default ProductCard;
