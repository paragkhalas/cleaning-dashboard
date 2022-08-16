import React from 'react';

const FooterMenu = () => {
  return (
    <div className="row mb-4">
      <div className="col">
        <ul className="nav flex-column footer-menu">
          <li className="nav-item">
            <button type="button" className="btn btn-link nav-link active">
              Cleaning
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-link nav-link">
              Chores
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-link nav-link">
              Food Delivery
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMenu;
