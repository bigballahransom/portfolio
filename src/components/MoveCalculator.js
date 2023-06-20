import React, { useState } from "react";

const MoveCalculator = () => {
  const [bedrooms, setBedrooms] = useState(0);
  const [cuftTotal, setCuftTotal] = useState(0);
  const [movers, setMovers] = useState(0);
  const [moveDuration, setMoveDuration] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [travelTimeHome, setTravelTimeHome] = useState(0);
  const [travelTimeEnd, setTravelTimeEnd] = useState(0);
  const [travelFee, setTravelFee] = useState(0);
  const [estimatedTotal, setEstimatedTotal] = useState(0);

  const handleBedroomsChange = (e) => {
    const value = parseInt(e.target.value);
    setBedrooms(value);
    const cuftTotal = value * 350;
    setCuftTotal(cuftTotal);
    const movers = cuftTotal <= 600 ? 2 : 3;
    setMovers(movers);
    calculateMoveDuration(cuftTotal, movers);
    calculateEstimatedTotal(cuftTotal, movers);
  };

  const handleTravelTimeHomeChange = (e) => {
    const newTravelTimeHome = parseInt(e.target.value);
    setTravelTimeHome(newTravelTimeHome);
    const travelFee = (newTravelTimeHome + travelTimeEnd) * (hourlyRate / 60);
    setTravelFee(travelFee);
    calculateEstimatedTotal(cuftTotal, movers, travelFee);
  };

  const handleTravelTimeEndChange = (e) => {
    const newTravelTimeEnd = parseInt(e.target.value);
    setTravelTimeEnd(newTravelTimeEnd);
    const travelFee = (travelTimeHome + newTravelTimeEnd) * (hourlyRate / 60);
    setTravelFee(travelFee);
    calculateEstimatedTotal(cuftTotal, movers, travelFee);
  };

  const handleHourlyRateChange = (e) => {
    const value = parseInt(e.target.value);
    setHourlyRate(value);
    calculateEstimatedTotal(cuftTotal, movers, travelFee);
  };

  const calculateMoveDuration = (cuftTotal, movers) => {
    const moveDuration = Math.ceil(cuftTotal / (movers * 65));
    setMoveDuration(moveDuration);
  };

  const calculateEstimatedTotal = (cuftTotal, movers, travelFee) => {
    const moveCost = movers * moveDuration * hourlyRate;
    const estimatedTotal = moveCost + travelFee;
    setEstimatedTotal(estimatedTotal);
  };

  return (
    <div className="flex flex-wrap justify-center bg-gray-200">
      <div className="border rounded-xl shadow p-2 m-4 bg-white">
        <div>
          <label htmlFor="bedrooms">Number of Bedrooms:</label>
          <input
            type="number"
            id="bedrooms"
            min="0"
            value={bedrooms}
            onChange={handleBedroomsChange}
          />
        </div>
        <div>
          <label htmlFor="travelTimeHome">Travel Time (Home):</label>
          <input
            type="number"
            id="travelTimeHome"
            min="0"
            value={travelTimeHome}
            onChange={handleTravelTimeHomeChange}
          />
        </div>
        <div>
          <label htmlFor="travelTimeEnd">Travel Time (End Location):</label>
          <input
            type="number"
            id="travelTime"
            min="0"
value={travelTimeEnd}
onChange={handleTravelTimeEndChange}
/>
</div>
<div>
<label htmlFor="hourlyRate">Hourly Rate:</label>
<input
type="number"
id="hourlyRate"
min="0"
value={hourlyRate}
onChange={handleHourlyRateChange}
/>
</div>
</div>
<div className="bg-white border rounded-xl shadow p-2 m-4">
<p>Cubic Feet: {cuftTotal}</p>
<p>Number of Movers: {movers}</p>
<p>Move Duration: {moveDuration} hours</p>
<p>Travel Fee: {travelFee}</p>
<p>Estimated Total: {estimatedTotal}</p>
</div>
</div>
);
};

export default MoveCalculator;
