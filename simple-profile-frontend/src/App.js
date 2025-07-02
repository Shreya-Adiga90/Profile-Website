import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import 'react-quill/dist/quill.snow.css';
import './App.css';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [profile, setProfile] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation(); // Get current path

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/profile`)
    axios.get('http://localhost:5000/api/profile')
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);

  const projects = [
    {
      img: "https://img.icons8.com/?size=96&id=UhSB60MHvQFR&format=png",
      title: "Tea Leaf Disease Prediction",
      description: "Built an End-to-End MLOps pipeline for predicting tea leaf disease severity."
    },
    {
      img: "https://img.icons8.com/?size=160&id=97624&format=png",
      title: "Career Prediction Using ML",
      description: "Predicted career paths using ML based on skills, interests, and academics."
    },
    {
      img: "https://img.icons8.com/?size=160&id=GeZiqnW07INe&format=png",
      title: "AR Interior Designing",
      description: "Developed an AR app to visualize and design room interiors in real-time."
    },
    {
      img: "https://img.icons8.com/?size=160&id=cQW1Wd5OpRaM&format=png",
      title: "Karnataka Tourism Website",
      description: "Created a tourism website using HTML, CSS, JavaScript for Karnataka."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/11078/11078771.png",
      title: "Android Bookstore App",
      description: "An Android app for online bookstore with user login and shopping flow."
    },
    {
      img: "https://img.icons8.com/?size=96&id=bav5L69UGa9i&format=png",
      title: "Python Car Racing Game",
      description: "A 2D car racing game using Python and Pygame with collision logic."
    }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        {/* Hide Blog button when already on /blog */}
        {location.pathname !== '/blog' && (
          <Link to="/blog" className="nav-button">Blog</Link>
        )}
      </nav>

      <AppRoutes
        profile={profile}
        projects={projects}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
    </div>
  );
}

export default AppWrapper;
