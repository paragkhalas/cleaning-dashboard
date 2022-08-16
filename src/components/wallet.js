import React from 'react';

const Wallet = () => {
  return (
    <div className="row mt-4 mb-2">
      <div className="col">
        <div className="wallet-balance-status mb-2">
          <h6 className="mt-4">Your Amenify Wallet balance:</h6>
          <p className="description">
            You have <strong>$25</strong> towards your next order!
          </p>
        </div>
      </div>
      <div className="w-100" />
      <div className="col">
        <p className="wallet-legend text-center">
          Your balance will automatically be applied to your next purchase.
        </p>
      </div>
    </div>
  );
};

export default Wallet;
