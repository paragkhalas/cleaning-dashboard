import React from 'react';

import './App.scss';
import profile from './assets/images/userprofile.png';
import cleaning from './assets/images/cleaning.png';
import chores from './assets/images/chores.png';
import foodDelivery from './assets/images/food-delivery.png';
// import userBackground from './assets/images/user-background.png';
// import chores2 from './assets/images/chores2.png';
// import choresReview from './assets/images/chores-review.png';
// import treat from './assets/images/treat.png';
// import dish from './assets/images/dish.png';
// import meal1 from './assets/images/meal1.png';
// import meal2 from './assets/images/meal2.png';


function App() {
  return (
    <div className='container mt-5'>

      <div className='row d-flex justify-content-center'>
        <div className='col-md-7'>
          <div className='p-3 py-4 user-profile'>
            <div className='text-center'>
              <img src={profile} width='100' className='rounded-circle' alt='profile' />
            </div>
            <div className='text-center mt-3'>
              <h5 className='mt-2 mb-0'>Good morning, Kaylie</h5>
              <div className='px-4 mt-1'>
                <p className='small-fonts'>What can Gables Columbus Center + Amenify do for you today?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row services'>
        <h6 className='service-heading'>Browse your services</h6>
        <div className="w-100"></div>
        <div className="col">
          <div className='service-item'>
            <div className='image-container'>
              <img src={cleaning} alt='cleaning' />
            </div>
            <h6 className='mt-2 mb-0'>Cleaning</h6>
            <span className='price'>Starting at $75</span>
          </div>
        </div>
        <div className="col">
          <div className='service-item'>
            <div className='image-container'>
              <img src={chores} alt='chores' />
            </div>
            <h6 className='mt-2 mb-0'>Chores</h6>
            <span className='price'>Starting at $5</span>
          </div>
        </div>
        <div className="col">
          <div className='service-item'>
            <div className='image-container'>
              <img src={foodDelivery} alt='food delivery' />
            </div>
            <h6 className='mt-2 mb-0'>Food Delivery</h6>
            <span className='price'>Starting at $5</span>
          </div>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col'>
          <div className='wallet-balance-status'>
            <h6 className='mt-4'>Your Amenify Wallet balance:</h6>
            <p>You have <strong>$25</strong> towards your next order!</p>
          </div>
        </div>
        <div className="w-100"></div>
        <div className='col'>
          <p className='wallet-legend text-center'>Your balance will automatically be applied to your next purchase.</p>
        </div>
      </div>

    </div>
  );
}

export default App;
