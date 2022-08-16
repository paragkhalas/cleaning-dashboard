import React, { useState } from 'react';
import WelcomeService from './components/welcomeServices';
import Wallet from './components/wallet';
import Menu from './components/menu';
import Chores from './components/chores';
import TreatMenu from './components/treat';
import CovidSafety from './components/covidSafety';
import Meals from './components/meals';
import TakeAway from './components/takeAway';
import FooterMenu from './components/footerMenu';

import { Services } from './utils/services';
import meal1 from './assets/images/meal1.png';
import meal2 from './assets/images/meal2.png';

import './App.scss';

function App() {
  const [services] = useState(Services);
  const [meals] = useState([meal1, meal2]);

  return (
    <div className="container mt-5">
      <WelcomeService services={services} />
      <Wallet />
      <Menu />
      <Chores />
      <TreatMenu />
      <CovidSafety />
      <Meals meals={meals} />
      <TakeAway />
      <FooterMenu />
    </div>
  );
}

export default App;
