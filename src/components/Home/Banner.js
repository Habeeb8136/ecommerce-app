import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url: './surprised-girl-pink-culottes-posing-with-trolley-full-multi-colored-packages-with-new-clothes.jpg',
  caption: '1/3'
  },
  {
  url: './black-friday-elements-assortment.jpg',
  caption: '2/3'
  },
  {
  url: 'images/slide_7.jpg',
  caption: '3/3'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;