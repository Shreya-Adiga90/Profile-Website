import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogForm.css';

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Editing blog with ID:", id);  // Debugging line

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

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/blogs/${id}`, formData)
      .then(() => navigate('/blog'))
      .catch(err => console.error("Error updating blog:", err));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="blog-form-container">
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
          />
        </div>
        <div className="form-group">
          <label>Content:</label><br />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="textarea-field"
          />
        </div>
        <button type="submit" className="submit-btn">Update</button>
      </form>
    </div>
  );
}

export default EditBlog;
