import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Load posts using Fetch API
  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  // Lifecycle hook: fetch posts after component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling lifecycle hook
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("Something went wrong while loading posts.");
    console.error("Error caught by componentDidCatch:", error, info);
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h2>Error occurred while loading posts.</h2>;
    }

    return (
      <div>
        <h2>All Blog Posts</h2>
        {posts.slice(0, 10).map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
