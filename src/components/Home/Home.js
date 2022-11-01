import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Home.css";
import 'react-slideshow-image/dist/styles.css'
import Slideshow from "./Banner";
import ProductCard from "../productCard/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);



  return (
    

    <div className="home-container">
    <div className='category'>
                <h4>CATEGORY</h4>
                <ul>
                <li>men's</li>
                <li>women's</li>
                <li>kid's</li>
                <li>electronics</li>
                <li>jewelery</li>
                </ul>
            </div>

            
    

      {products.map((items) => {
        return (
          <ul>
            <li><ProductCard 
              src={items.image}
              title={items.title}
              price={items.price}
              description={items.description}
              rating={items.rating.rate}
            /></li>
          </ul>
        );
      })}
    </div>
  );
}

export default Home;
