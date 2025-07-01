import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
=======
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
import './BlogForm.css';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD

    axios.post('http://localhost:5000/api/blogs', { title, content }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(() => navigate('/blog'))
    .catch(err => console.error(err));
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/Blog-Background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '60px 20px 20px',
        boxSizing: 'border-box',
      }}
    >
      <div className="blog-form-container" style={{ maxWidth: '700px', width: '100%' }}>
        <button
  onClick={() => navigate('/blog')}
  style={{
    marginBottom: '20px',
    padding: '8px 12px',
    backgroundColor: '#facc15',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }}
>
  ← Back to Blog
</button>
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
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
              placeholder="Write your blog content here..."
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
=======
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
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
    </div>
  );
}

export default AddBlog;
