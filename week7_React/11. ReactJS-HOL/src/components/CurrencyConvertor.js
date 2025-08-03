import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // 1 INR = 0.011 Euro approx
    setEuros((parseFloat(rupees) * conversionRate).toFixed(2));
  };

  return (
    <div>
      <h3>Currency Convertor</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>Euro: €{euros}</p>}
    </div>
  );
}

export default CurrencyConvertor;
