// Carousel.js
import React from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { DescriptionComponent } from './DescriptionComponent';
import { ThreeCube } from './ThreeCube';

export function Carousel() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    withLoop: false,
    startEndGutter: 24,
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
            <ThreeCube/>
            <DescriptionComponent />
          </div>
        ),
      },
    ],
  });

  return (
    <div>
      <div>
        <div>{carouselFragment}</div>
      </div>
    </div>
  );
}
