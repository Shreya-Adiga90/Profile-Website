const Blog = require('../model/Blog'); // ✅ Your correct model path

// ✅ Create a new blog
exports.createBlog = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newBlog = new Blog({ title, content, author });
    await newBlog.save(); // ✅ Triggers slug generation via pre('save') hook
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get blog by Slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update blog by ID
exports.updateBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, author },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });

    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Delete blog by ID
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};