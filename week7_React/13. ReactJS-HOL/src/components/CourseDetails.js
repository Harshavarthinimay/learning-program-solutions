import React from 'react';

const courses = [
  { id: 1, name: "Full Stack Development", duration: "6 months" },
  { id: 2, name: "Frontend with React", duration: "3 months" },
];

function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
