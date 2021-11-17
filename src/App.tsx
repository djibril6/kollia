import React from 'react';
import './App.scss';
import { HorizontalCarousel } from './lib/components';

function App() {
  return (
    <div className="App">
      <HorizontalCarousel>
          <HorizontalCarousel.Description>
            <div>Description 1</div>
            <div>Description 2</div>
            <div>Description 3</div>
          </HorizontalCarousel.Description>
          <HorizontalCarousel.Main>
            <div className="caroussel-image1">Image 1</div>
            <div className="caroussel-image2">Image 2</div>
            <div className="caroussel-image3">Image 3</div>
          </HorizontalCarousel.Main>
      </HorizontalCarousel>
    </div>
  );
}

export default App;
