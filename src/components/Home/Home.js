import React from "react";
import { useState ,useEffect , useRef } from "react";
import "./Home.css";


import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";
import CarouselSlide from "./Carousel";

function Home(props) {
  const display = useRef(null)
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);

  const filterSearch = (e) => {
    const clickedCategory = e.target.innerText;
    setCategory(clickedCategory);

    setFilteredData(
      products.filter((item) => item.category.includes(clickedCategory))
    );
    window.scrollTo({
      top: display.current.offsetTop,
      behavior: 'smooth',
    });
    console.log(filteredData);
  };
  
  

  return (
    <div className="home-container">
      <div className="banner-carouel">
        <CarouselSlide />
      </div>

      <div className="category" ref={display}>
          <h4>CATEGORIES</h4>
        <ul onClick={(e) => filterSearch(e)}>
          <li> men's </li>
          <li>women's </li>
          <li>electronics</li>
          <li>jewelery</li>
          <li>Show all products</li>
        </ul>
      </div>

      <div className="product-list" >
        {filteredData.length!==0
          ? filteredData.map((items) => {
              return (
                <Link
                  to={`/product/${items.id}`}
                  state={items}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="product-card" >
                    <ProductCard
                      src={items.image}
                      title={items.title}
                      price={items.price}
                      description={items.description}
                      rating={items.rating.rate}
                      ratingCount={items.rating.count}
                      
                      items={items}
                    />
                  </div>
                </Link>
              );
            })
          : products.map((items) => {
              return (
                <Link
                  to={`/product/${items.id}`}
                  state={items}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
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
