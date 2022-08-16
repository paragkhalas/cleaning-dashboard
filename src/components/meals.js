import React from 'react';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

const Meals = ({ meals }) => {
  const options = {
    items: 2,
    nav: false,
    margin: 8,
    loop: true,
    autoplay: true,
  };

  return (
    <div className="row mb-4">
      <div className="col">
        <OwlCarousel options={options}>
          {meals.length &&
            meals.map((meal, index) => {
              return (
                <div key={index}>
                  <img src={meal} alt="meal" />
                </div>
              );
            })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Meals;
