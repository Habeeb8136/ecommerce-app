import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProductCard.css'


const ProductCard = (props) => {
    return (
        <Container className='product-card '>
        <Row className='product-row'>
            <Col className='image-col'><img className='image' src={props.src} alt=""></img></Col>
            <Col sm={8} md={8} className='description-col'>product details</Col>
        </Row>
            
        </Container>
    );
}

export default ProductCard;
