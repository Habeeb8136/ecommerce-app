import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './salebanners/Black and Red Modern Discount Banner.png';
import banner2 from './salebanners/Blue Dynamic Fashion Special Sale Banner.png'
import banner3 from './salebanners/Dark Blue Modern Discount Banner.png'

import ProductCard from "../productCard/ProductCard";
import {Link} from "react-router-dom"

function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    

    <div className="home-container">
    <div className='category'>
                <Link to='/'><h4>CATEGORY</h4></Link>
                <ul>
                <li>men's</li>
                <li>women's</li>
                <li>kid's</li>
                <li>electronics</li>
                <li>jewelery</li>
                </ul>
            </div>


            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="banner">
        <img 
          className="d-block w-100 banner-image"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className="banner">
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className="banner">
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>



      <div className="product-list">
      {products.map((items) => {
        return (
          
            <Link to= {`/product/${items.id}`} state={items} style={{textDecoration:'none' ,color:"inherit"}}>
            <div className="product-card">
            <ProductCard 
              src={items.image}
              title={items.title}
              price={items.price}
              description={items.description}
              rating={items.rating.rate}
              ratingCount={items.rating.count}
            />
            </div>
            </Link>
          
        );
      })}
      </div>
    </div>
  );
}

export default Home;
