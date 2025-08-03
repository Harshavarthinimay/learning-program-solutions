import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("book");

  let content;

  // 1. Using if-else
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else if (view === "course") {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Blogger App</h1>

      {/* Conditional rendering using ternary */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setView("book")}>Book Details</button>
        <button onClick={() => setView("blog")}>Blog Details</button>
        <button onClick={() => setView("course")}>Course Details</button>
      </div>

      {/* Render selected component */}
      {content}
    </div>
  );
}

export default App;
