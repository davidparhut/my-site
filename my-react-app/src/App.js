// /src/App.js
import React from 'react';
import MarketGrowthChart from './components/MarketGrowthChart';
import ForecastChart from './components/ForecastChart';

const App = () => {
  return (
    <div className="app">
      <h1>Графіки зростання</h1>
      <MarketGrowthChart />
      <ForecastChart />
    </div>
  );
};

export default App;
