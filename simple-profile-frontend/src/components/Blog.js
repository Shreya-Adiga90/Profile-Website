import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Blog</h2>
      {blogs.length === 0 ? (
        <p>No Posts Yet</p>
      ) : (
        blogs.map((blog, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <small>{new Date(blog.date).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
