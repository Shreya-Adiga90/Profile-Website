import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BlogForm.css';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/blogs', { title, content })
      .then(() => navigate('/blog'))
      .catch(err => console.error(err));
  };

  return (
    <div className="blog-form-container">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Content:</label><br />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            className="textarea-field"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddBlog;
