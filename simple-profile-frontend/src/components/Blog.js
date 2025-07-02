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
    <div
      style={{
        display: 'flex',
        height: '600px',        // Fixed height for entire blog section
        margin: '40px',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          backgroundColor: '#000000dd',
          color: 'white',
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        <h3>Blogs</h3>
        {blogs.map((blog, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {blog.title}
          </div>
        ))}
      </div>

      {/* Blog content area */}
      <div
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          padding: '30px',
          overflowY: 'auto',
        }}
      >
        <h2>My Blog</h2>
        {blogs.length === 0 ? (
          <p>No Posts Yet</p>
        ) : (
          blogs.map((blog, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3>{blog.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: blog.content }} />
              <small>{new Date(blog.date).toLocaleDateString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
