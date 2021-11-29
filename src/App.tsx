import React from 'react';
import './App.scss';
import { HorizontalCarousel, VerticalCarousel, GridCarousel, Stepper } from './lib';

// import { GridCarousel,  HorizontalCarousel, VerticalCarousel } from 'kollia';

const thumbs = [
  'https://www.discover.com/content/dam/dfs/student-loans/hero/homebanner/home-hero-girl-rocks.jpg',
  'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/couple-man-woman-lake_SOSL19064_N8Bqv6hfvow_us.jpg',
  'https://m.foolcdn.com/media/affiliates/images/couple_shopping_online.width-1200.jpg',
];
function App() {
  const [current, setCurrent] = React.useState(1);

  function onNext() {
    setCurrent(current + 1);
  }

  function onPrev() {
    setCurrent(current - 1);
  }
  return (
    <div className="App">
      <Stepper current={current}>
        <Stepper.Item>
          dfoashfdsalf <br />jojfoh <br />

          <div className="navigation">
            <button onClick={() => onPrev()}>Previous</button>
            <button onClick={() => onNext()}>Next</button>
          </div>
        </Stepper.Item>

        <Stepper.Item>
          Dijvrirl <br />jojfoh <br />
          <div className="navigation">
            <button onClick={() => onPrev()}>Previous</button>
            <button onClick={() => onNext()}>Next</button>
          </div>
        </Stepper.Item>

        <Stepper.Item>
          Bon ben allons y <br />jojfoh <br />
        </Stepper.Item>

        <Stepper.Footer>
          <div className="navigation">
            <button onClick={() => onPrev()}>Previous</button>
            <button onClick={() => onNext()}>Next</button>
          </div>
        </Stepper.Footer>
        
      </Stepper>

      <GridCarousel columns={3}>
        <GridCarousel.Item>1</GridCarousel.Item>
        <GridCarousel.Item>2</GridCarousel.Item>
        <GridCarousel.Item>3</GridCarousel.Item>
        <GridCarousel.Item>4</GridCarousel.Item>
        <GridCarousel.Item>5</GridCarousel.Item>
      </GridCarousel>
      <div>
        <VerticalCarousel thumbs={thumbs}>
          <VerticalCarousel.Item title="Discover new places">
            <VerticalCarousel.Main>
              <img src="https://www.discover.com/content/dam/dfs/student-loans/hero/homebanner/home-hero-girl-rocks.jpg" alt="d" />
            </VerticalCarousel.Main>
            {/* <VerticalCarousel.Description>
              blajljadf  <br /> bkallkjdl f <br />jkl fdjlfjdsljfsf
            </VerticalCarousel.Description> */}
          </VerticalCarousel.Item>

          <VerticalCarousel.Item title="Meet more people">
            <VerticalCarousel.Main>
              <img src="https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/couple-man-woman-lake_SOSL19064_N8Bqv6hfvow_us.jpg" alt="d" />
            </VerticalCarousel.Main>
            <VerticalCarousel.Description>
              Djib  <br /> bkallkjdl f <br />jkl fdjlfjdsljfsf
            </VerticalCarousel.Description>
          </VerticalCarousel.Item>

          <VerticalCarousel.Item title="Learn other's cultures">
            <VerticalCarousel.Main>
              <img src="https://m.foolcdn.com/media/affiliates/images/couple_shopping_online.width-1200.jpg" alt="d" />
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
            <div className="carousel-image1">Image 1</div>
            <div className="carousel-image2">Image 2</div>
            <div className="carousel-image3">Image 3</div>
          </HorizontalCarousel.Main>
      </HorizontalCarousel>
      </div>
    </div>
  );
}

export default App;
