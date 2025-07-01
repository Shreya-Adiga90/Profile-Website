<<<<<<< HEAD
/*const express = require('express');
=======
const express = require('express');
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
const router = express.Router();
const blogController = require('../controller/Blog');

router.post('/', blogController.createBlog);
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogById);  // add this
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
<<<<<<< HEAD
*/

//run buid

/*
const express = require('express');
const router = express.Router();
const blogController = require('../controller/Blog');

// Create a new blog
router.post('/', blogController.createBlog);

// Get all blogs
router.get('/', blogController.getBlogs);

// ✅ Slug route first
router.get('/slug/:slug', blogController.getBlogBySlug);

// Then ID route
router.get('/:id', blogController.getBlogById);

// Update and delete
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;

*/
const express = require('express');
const router = express.Router();
const blogController = require('../controller/Blog');

// Create a new blog
router.post('/', blogController.createBlog);

// Get all blogs
router.get('/', blogController.getBlogs);

// Specific named routes first
router.get('/slug/:slug', blogController.getBlogBySlug);

// Update blog
router.put('/:id', blogController.updateBlog);

// Delete blog
router.delete('/:id', blogController.deleteBlog);

// Get by ID — LAST
router.get('/:id', blogController.getBlogById);

module.exports = router;
=======
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
