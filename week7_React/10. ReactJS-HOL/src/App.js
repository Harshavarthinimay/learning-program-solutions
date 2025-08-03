import React from 'react';
import './App.css';

function App() {
  const officeSpaces = [
    { name: "Tech Tower", rent: 55000, address: "MG Road, Bangalore", image: "https://via.placeholder.com/150" },
    { name: "Startup Hub", rent: 75000, address: "Gachibowli, Hyderabad", image: "https://via.placeholder.com/150" },
    { name: "Corporate Bay", rent: 62000, address: "Tidel Park, Chennai", image: "https://via.placeholder.com/150" }
  ];

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? "red" : "green"
  });

  return (
    <div>
      <h1>🏢 Office Space Rental App</h1>
      {officeSpaces.map((office, index) => (
        <div key={index} style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "300px" }}>
          <img src={office.image} alt={office.name} width="150" height="100" />
          <h3>{office.name}</h3>
          <p style={getRentStyle(office.rent)}>Rent: ₹{office.rent}</p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
