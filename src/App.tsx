import React from 'react';
import './App.scss';
import { HorizontalCarousel, VerticalCarousel } from './lib/components';

const thumbs = [
  'https://www.discover.com/content/dam/dfs/student-loans/hero/homebanner/home-hero-girl-rocks.jpg',
  'https://www.discover.com/content/dam/dfs/student-loans/hero/homebanner/home-hero-girl-rocks.jpg',
  'https://www.discover.com/content/dam/dfs/student-loans/hero/homebanner/home-hero-girl-rocks.jpg',
];
function App() {
  return (
    <div className="App">
      <div>
        <VerticalCarousel thumbs={thumbs}>
          <VerticalCarousel.Item title="Discover new places">
            <VerticalCarousel.Main>
              <img src="https://www.discover.com/content/dam/dfs/student-loans/hero/homebanner/home-hero-girl-rocks.jpg" alt="d" />
            </VerticalCarousel.Main>
            <VerticalCarousel.Description>
              blajljadf  <br /> bkallkjdl f <br />jkl fdjlfjdsljfsf
            </VerticalCarousel.Description>
          </VerticalCarousel.Item>

          <VerticalCarousel.Item title="Meet more people">
            <VerticalCarousel.Main>
              <img src="https://www.discover.com/content/dam/dfs/student-loans/hero/homebanner/home-hero-girl-rocks.jpg" alt="d" />
            </VerticalCarousel.Main>
            <VerticalCarousel.Description>
              Djib  <br /> bkallkjdl f <br />jkl fdjlfjdsljfsf
            </VerticalCarousel.Description>
          </VerticalCarousel.Item>

          <VerticalCarousel.Item title="Learn other's cultures">
            <VerticalCarousel.Main>
              <img src="https://www.discover.com/content/dam/dfs/student-loans/hero/homebanner/home-hero-girl-rocks.jpg" alt="d" />
            </VerticalCarousel.Main>
            <VerticalCarousel.Description>
              ISSS  <br /> bkallkjdl f <br />jkl fdjlfjdsljfsf
            </VerticalCarousel.Description>
          </VerticalCarousel.Item>
        </VerticalCarousel>
      </div>

      <div>
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
    </div>
  );
}

export default App;
