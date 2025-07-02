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
