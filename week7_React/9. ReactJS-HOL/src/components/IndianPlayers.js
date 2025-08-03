import React from 'react';

const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Pant", "Hardik"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Karun", "Sundar"];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  const oddPlayers = mergedPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = mergedPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Merged Players:</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team:</h3>
      <ul>
        {evenPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h3>Odd Team:</h3>
      <ul>
        {oddPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
