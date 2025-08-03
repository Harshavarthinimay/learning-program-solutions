import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 95 },
    { name: "Dhoni", score: 65 },
    { name: "Kohli", score: 45 },
    { name: "Bumrah", score: 76 },
    { name: "Rahul", score: 68 },
    { name: "Shami", score: 88 },
    { name: "Ashwin", score: 34 },
    { name: "Jadeja", score: 92 },
    { name: "Pant", score: 51 },
    { name: "Iyer", score: 73 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players and Scores:</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {filteredPlayers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
