import React from 'react';
import Rating from 'react-rating';

import chores2 from '../assets/images/chores2.png';
import choresReview from '../assets/images/chores-review.png';
import ratingFilled from '../assets/images/star-filled.png';

const Chores = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="p-5 py-3 white-bg-section">
            <div className="text-center">
              <img src={chores2} alt="chores2" />
            </div>
            <div className="text-center">
              <h6 className="mt-2 mb-0 section-heading">We leave a little sparkle.</h6>
              <div className="px-4 mt-1">
                <p className="small-fonts description">
                  Members enjoy special pricing so leave the chores to us.
                </p>
              </div>
              <button type="button" className="rounded-pill btn btn-outline btn-chores">
                See Chores
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mb-4">
        <div className="col">
          <div className="p-5 py-3 rating-section">
            <div className="text-center">
              <img src={choresReview} alt="review" className="rounded-circle" />
            </div>
            <div className="text-center white-clr">
              <Rating
                className="mt-3 star-rating"
                placeholderRating={5}
                emptySymbol={<img src={ratingFilled} alt="rating" className="icon" />}
                placeholderSymbol={<img src={ratingFilled} alt="rating" className="icon" />}
                fullSymbol={<img src={ratingFilled} alt="rating" className="icon" />}
              />
              <h6 className="mt-4 mb-0 section-heading">3,000+ five-star resident reviews</h6>
              <div className="mt-2 small-fonts">
                <p className="mb-0">
                  This saves me hundreds each month, easily. It&apos;s the best amenity I&apos;ve
                  ever had.
                </p>
                <p className="mb-0"> - Annie P., Seattle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chores;
