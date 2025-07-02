import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogForm.css';

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [loading, setLoading] = useState(true);

  // ✅ Fetch existing blog data
  useEffect(() => {
    console.log("Editing blog with ID:", id);
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => {
        setFormData({
          title: res.data.title,
          content: res.data.content
        });
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  // ✅ Quill toolbar config
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuillChange = (value) => {
    setFormData(prev => ({
      ...prev,
      content: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/blogs/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(() => navigate('/blog'))
    .catch(err => console.error("Error updating blog:", err));
  };

  if (loading) return <p>Loading...</p>;

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

        <h2>Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label><br />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="input-field"
              style={{ fontSize: '15px', padding: '10px 12px' }}
            />
          </div>

          <div className="form-group">
            <label>Content:</label><br />
            <ReactQuill
              value={formData.content}
              onChange={handleQuillChange}
              modules={modules}
              className="textarea-field"
              style={{ fontSize: '15px', marginBottom: '20px' }}
            />
          </div>

          <button type="submit" className="submit-btn">Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
