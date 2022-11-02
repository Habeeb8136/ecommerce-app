import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Home.css";

import ProductCard from "../productCard/ProductCard";
import {Link} from "react-router-dom"

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
                <Link to='/signin'><h4>CATEGORY</h4></Link>
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
            <Link to='/product/item' state={items} style={{textDecoration:'none' ,color:"inherit"}}>
            <li>
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
          </ul>
        );
      })}
    </div>
  );
}

export default Home;
