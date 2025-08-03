import React from 'react';

const blogs = [
  { id: 1, title: "Understanding JSX", writer: "Sophie Alpert" },
  { id: 2, title: "React Hooks in Depth", writer: "Sebastian Markbåge" },
];

function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} - {blog.writer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
