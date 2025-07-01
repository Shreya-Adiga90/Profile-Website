<<<<<<< HEAD
/*
// Home.js
import React from 'react';
import '../App.css'; 
=======
// src/components/Home.js
import React from 'react';
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
import { Link } from 'react-router-dom';

function Home({ profile, projects, hoveredIndex, setHoveredIndex }) {
  if (!profile) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading profile...</p>;
  }

<<<<<<< HEAD
  const contact = profile.contact || {};

  return (
    <div className="snap-container">
      
      <section className="snap-section section-1">
        
        <div className="navbar">
          <Link to="/blog" className="nav-button">Blog</Link>
        </div>

        <div className="image-section">
          <img
            src={`http://localhost:5000${profile.photoUrl}`}
            alt="Profile"
            className="profile-photo"
          />
        </div>

        <div className="intro-section">
          <h1>Shreya Adiga</h1>
          <p>
            I am a passionate and dedicated individual with a strong interest in technology, creativity, and continuous learning.
            Whether it's building responsive web applications, exploring backend systems, or experimenting with design, I love bringing
            ideas to life through code. My journey is driven by curiosity, perseverance, and the desire to grow every single day.
          </p>
        </div>
      </section>

      <section className="snap-section section-2">
        <div className="javier-section">
          <div className="javier-left">
            <h2>About Me</h2>
            <h4>Information Science Engineering Student</h4>
            <p>
              I'm an Information Science Engineering student at NMAM Institute of Technology. I enjoy building web and mobile applications,
              exploring backend systems, and working with technologies like React, Node.js, MongoDB, and Python.
            </p>
            <div className="javier-icons">
              <a href={contact.github || "#"}><i className="fab fa-github"></i></a>
              <a href={contact.linkedin || "#"}><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="javier-right">
            <div className="circle-row">
              <div className="circle" style={{ borderColor: "#3b82f6" }}><span>Teamwork</span></div>
              <div className="circle" style={{ borderColor: "#f59e0b" }}><span>Creativity</span></div>
              <div className="circle" style={{ borderColor: "#ec4899" }}><span>Communication</span></div>
            </div>
            <div className="circle-row">
              <div className="circle" style={{ borderColor: "#10b981" }}><span>Hard Working</span></div>
              <div className="circle" style={{ borderColor: "#0ea5e9" }}><span>Fast Learner</span></div>
              <div className="circle" style={{ borderColor: "#f87171" }}><span>Engineer</span></div>
            </div>
          </div>
        </div>

        <div className="project-track-wrapper">
          <div className="project-track">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="project-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={project.img} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="project-description-box">
            {hoveredIndex !== null ? (
              <>
                <h4>{projects[hoveredIndex % projects.length].title}</h4>
                <p>{projects[hoveredIndex % projects.length].description}</p>
              </>
            ) : (
              "Hover over a project icon to see its description here."
            )}
          </div>
        </div>
      </section>

      
      <section className="snap-section section-3">
        <div className="footer">
          <div className="footer-box">
            <h4>LinkedIn</h4>
            <a href={contact.linkedin || "#"} target="_blank" rel="noreferrer">Profile</a>
          </div>
          <div className="footer-box">
            <h4>GitHub</h4>
            <a href={contact.github || "#"} target="_blank" rel="noreferrer">Profile</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
*/
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home({ profile, projects, hoveredIndex, setHoveredIndex }) {
  if (!profile) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading profile...</p>;
  }

  const contact = profile.contact || {};

  return (
    <div className="snap-container">

      {/* Section 1: Profile Image & Intro */}
      <section className="snap-section section-1">
        <div className="navbar">
          <Link to="/blog" className="nav-button">Blog</Link>
        </div>

        <div className="image-section">
          <img
            src={`http://localhost:5000${profile.photoUrl}`}
            alt="Profile"
            className="profile-photo"
          />
        </div>

        <div className="intro-section">
          <h1>Shreya Adiga</h1>
          <p>
            I am a passionate and dedicated individual with a strong interest in technology, creativity, and continuous learning.
            Whether it's building responsive web applications, exploring backend systems, or experimenting with design, I love bringing
            ideas to life through code. My journey is driven by curiosity, perseverance, and the desire to grow every single day.
          </p>
        </div>
      </section>

      {/* Section 2: About + Projects */}
      <section className="snap-section section-2">
        <div className="javier-section">
          <div className="javier-left">
            <h2>About Me</h2>
            <h4>Information Science Engineering Student</h4>
            <p>
              I'm an Information Science Engineering student at NMAM Institute of Technology. I enjoy building web and mobile applications,
              exploring backend systems, and working with technologies like React, Node.js, MongoDB, and Python.
            </p>
            <div className="javier-icons">
              <a href={contact.github || "#"}><i className="fab fa-github"></i></a>
              <a href={contact.linkedin || "#"}><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="javier-right">
            <div className="circle-row">
              <div className="circle" style={{ borderColor: "#3b82f6" }}><span>Teamwork</span></div>
              <div className="circle" style={{ borderColor: "#f59e0b" }}><span>Creativity</span></div>
              <div className="circle" style={{ borderColor: "#ec4899" }}><span>Communication</span></div>
            </div>
            <div className="circle-row">
              <div className="circle" style={{ borderColor: "#10b981" }}><span>Hard Working</span></div>
              <div className="circle" style={{ borderColor: "#0ea5e9" }}><span>Fast Learner</span></div>
              <div className="circle" style={{ borderColor: "#f87171" }}><span>Engineer</span></div>
            </div>
          </div>
        </div>

        <div className="project-track-wrapper">
          <div className="project-track">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="project-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={project.img} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="project-description-box">
            {hoveredIndex !== null ? (
              <>
                <h4>{projects[hoveredIndex % projects.length].title}</h4>
                <p>{projects[hoveredIndex % projects.length].description}</p>
              </>
            ) : (
              "Hover over a project icon to see its description here."
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Footer with GitHub & LinkedIn icons */}
      <section className="snap-section section-3">
        <div className="footer">
          <a
            href={contact.linkedin || "#"}
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <img
              src="/icons/linkedin.jpg"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a
            href={contact.github || "#"}
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <img
              src="/icons/github.jpeg"
              alt="GitHub"
              className="social-icon"
            />
          </a>
        </div>
      </section>
=======
  return (
    <div className="App">
      
      <div className="image-section">
        <img
          src={`http://localhost:5000${profile.photoUrl}`}
          alt="Profile"
          className="profile-photo"
        />
      </div>

      
      <div className="intro-section">
        <h1>Shreya Adiga</h1>
        <p>
          I am a passionate and dedicated individual with a strong interest in technology, creativity, and continuous learning.
          Whether it's building responsive web applications, exploring backend systems, or experimenting with design, I love bringing
          ideas to life through code. My journey is driven by curiosity, perseverance, and the desire to grow every single day.
        </p>
      </div>

      
      <div className="javier-section">
        <div className="javier-left">
          <h2>About Me</h2>
          <h4>Information Science Engineering Student</h4>
          <p>
            I'm an Information Science Engineering student at NMAM Institute of Technology. I enjoy building web and mobile applications,
            exploring backend systems, and working with technologies like React, Node.js, MongoDB, and Python. I’ve also worked on projects
            involving machine learning, AR/VR, and UI/UX design.
          </p>
          <div className="javier-icons">
            <a href="mailto:shreya@example.com"><i className="fas fa-envelope"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="javier-right">
          <div className="circle-row">
            <div className="circle" style={{ borderColor: "#3b82f6" }}><span>Teamwork</span></div>
            <div className="circle" style={{ borderColor: "#f59e0b" }}><span>Creativity</span></div>
            <div className="circle" style={{ borderColor: "#ec4899" }}><span>Communication</span></div>
          </div>
          <div className="circle-row">
            <div className="circle" style={{ borderColor: "#10b981" }}><span>Hard Working</span></div>
            <div className="circle" style={{ borderColor: "#0ea5e9" }}><span>Fast Learner</span></div>
            <div className="circle" style={{ borderColor: "#f87171" }}><span>Engineer</span></div>
          </div>
        </div>
      </div>
       
      {/*}
       <div className="details-section">
        <h3>Contact</h3>
        <p><strong>Email:</strong> {profile.contact.email}</p>
        <p><strong>Phone:</strong> {profile.contact.phone}</p>
        <p><strong>LinkedIn:</strong> <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><strong>GitHub:</strong> <a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a></p>
      </div> 
       */}
      
      <div className="project-track-wrapper">
        <div
          className="project-track"
          //style={{ animationPlayState: hoveredIndex !== null ? 'paused' : 'running' }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="project-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={project.img} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="project-description-box">
          {hoveredIndex !== null ? (
            <>
              <h4>{projects[hoveredIndex % projects.length].title}</h4>
              <p>{projects[hoveredIndex % projects.length].description}</p>
            </>
          ) : (
            "Hover over a project icon to see its description here."
          )}
        </div>
      </div>

      
      
      <div className="horizontal-summary">
        <div className="summary-card">
          <h4>Email</h4>
          <p><a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></p>
        </div>
        <div className="summary-card">
          <h4>Phone</h4>
          <p>{profile.contact.phone}</p>
        </div>
        <div className="summary-card">
          <h4>LinkedIn</h4>
          <p><a href={profile.contact.linkedin} target="_blank" rel="noreferrer">Profile</a></p>
        </div>
        <div className="summary-card">
          <h4>GitHub</h4>
          <p><a href={profile.contact.github} target="_blank" rel="noreferrer">Profile</a></p>
        </div>
      </div>
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
    </div>
  );
}

export default Home;
