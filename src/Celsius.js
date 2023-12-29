import React from 'react';


function Celsius({ temperature }) {
  
  const toFahrenheit = () => {
    return (temperature * 9) / 5 + 32;
  };

  
  const toKelvin = () => {
    return temperature + 273.15;
  };

  return (
    <div className="temperature-container">
      <h2>Temperature</h2>
      <p>{temperature} &#8451;</p>
      <p>
        {toFahrenheit().toFixed(2)} &#8457; / {toKelvin().toFixed(2)} K
      </p>
    </div>
  );
}


export default Celsius; 