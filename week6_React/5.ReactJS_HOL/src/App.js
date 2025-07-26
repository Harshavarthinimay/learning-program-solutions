import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      name: "React Basics",
      batchId: "RB101",
      status: "ongoing",
      startDate: "2025-06-01",
      endDate: "2025-07-31"
    },
    {
      name: "Advanced Java",
      batchId: "AJ202",
      status: "completed",
      startDate: "2025-03-01",
      endDate: "2025-05-31"
    }
  ];

  return (
    <div>
      {cohorts.map((c, index) => (
        <CohortDetails key={index} cohort={c} />
      ))}
    </div>
  );
}

export default App;
