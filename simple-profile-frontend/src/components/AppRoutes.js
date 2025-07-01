// src/components/AppRoutes.js
/*import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BlogList from './BlogList';
import AddBlog from './AddBlog';
import EditBlog from './EditBlog';
import Home from './Home'; // We will extract the homepage content to Home.js


function AppRoutes({ profile, projects, hoveredIndex, setHoveredIndex }) {
  return (
    <Routes>
      <Route path="/" element={
        <Home
          profile={profile}
          projects={projects}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      } />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/add" element={<AddBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
    
    </Routes>
  );
}

export default AppRoutes;

// src/components/AppRoutes.js
*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BlogList from './BlogList';
import BlogSlugPage from './BlogSlugPage'; // ✅ Make sure this file exists
import AddBlog from './AddBlog';
import EditBlog from './EditBlog';
import Home from './Home'; // We will extract the homepage content to Home.js

function AppRoutes({ profile, projects, hoveredIndex, setHoveredIndex }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            profile={profile}
            projects={projects}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        }
      />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/slug/:slug" element={<BlogSlugPage />} /> {/* ✅ NEW */}
      <Route path="/add" element={<AddBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
    </Routes>
  );
}

export default AppRoutes;
