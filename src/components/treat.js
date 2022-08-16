import React from 'react';
import dish from '../assets/images/dish.png';

const TreatMenu = () => {
  return (
    <>
      <div className="row treat-section mb-4">
        <div className="col">
          <div className="card text-center">
            <div className="treat-bg-image" />
            <div className="card-body">
              <h6 className="section-heading">Treat yourself.</h6>
              <p className="description">
                Chef-prepared delicious meals handcrafted and delivered.
              </p>
              <button type="button" className="rounded-pill btn btn-outline btn-grey white-clr">
                See the Lunch menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="p-5 py-3 white-bg-section">
            <div className="text-center">
              <img src={dish} alt="dish" />
            </div>
            <div className="text-center">
              <h6 className="mt-2 mb-0">Dinner has never been easier.</h6>
              <div className="px-4 mt-1">
                <p className="small-fonts">
                  Chef-prepared delicious meals handcrafted and delivered.
                </p>
              </div>
              <button type="button" className="rounded-pill btn btn-outline btn-grey white-clr">
                See the Dinner menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatMenu;
