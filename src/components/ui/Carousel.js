// Carousel.js
import React, { useEffect } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { DescriptionComponent } from './DescriptionComponent';
import { ThreeCube } from './ThreeCube';
import '../../styles/Carousel.css';
import { ThreeModel } from './ThreeModel';

export function Carousel() {

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: 1,
    withLoop: true,
    startEndGutter: 0
  ,
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div>
            <ThreeCube/>
            <DescriptionComponent />
          </div>
        ),
      },
      {
        id: 'item-2',
        renderItem: (
          <div>
          <ThreeModel />
          <DescriptionComponent />
        </div>
        ),
      },
      {
        id: 'item-3',
        renderItem: (
          <div>
            <ThreeCube/>
            <DescriptionComponent />
          </div>
        ),
      },
    ],
  });

  return (
    <div>
        {carouselFragment}
        <div className="button-container">
        <button className="carousel-button" onClick={slideToPrevItem}>
          Prev item
        </button>
        <button className="carousel-button right-button" onClick={slideToNextItem}>
          Next item
        </button>
    </div>
    </div>
  );
}
