import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';


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
          src='https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg?w=2000'
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className="banner">
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.jpg?w=2000"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className="banner">
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/gradient-abstract-horizontal-sale-banner_52683-67806.jpg?w=2000"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>



    <ul>
      {products.map((items) => {
        return (
          
            <Link to= {`/product/${items.id}`} state={items} style={{textDecoration:'none' ,color:"inherit"}}>
            <li className="product-card" style={{margin:"10px"}}>
            <ProductCard 
              src={items.image}
              title={items.title}
              price={items.price}
              description={items.description}
              rating={items.rating.rate}
              ratingCount={items.rating.count}
            />
            </li>
            </Link>
          
        );
      })}
      </ul>
    </div>
  );
}

export default Home;
