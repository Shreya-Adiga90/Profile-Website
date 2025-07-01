// src/components/AppRoutes.js
<<<<<<< HEAD
/*import React from 'react';
=======
import React from 'react';
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
import { Routes, Route } from 'react-router-dom';

import BlogList from './BlogList';
import AddBlog from './AddBlog';
import EditBlog from './EditBlog';
import Home from './Home'; // We will extract the homepage content to Home.js

<<<<<<< HEAD

=======
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
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
<<<<<<< HEAD
    
=======
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
    </Routes>
  );
}

export default AppRoutes;

// src/components/AppRoutes.js
<<<<<<< HEAD
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
=======
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
