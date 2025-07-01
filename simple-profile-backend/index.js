/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const blogRoutes = require('./routes/blog'); // includes slug logic
const userRoutes = require('./routes/userManagement');
const authRoutes = require('./routes/auth');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

// ✅ Static File Serving for Profile Images or Assets
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ✅ MongoDB Connection
mongoose.connect('mongodb://localhost:27017/revaalo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Route Handlers
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);       // Blog + Slug support
app.use('/api', userRoutes);             // User profile info (eg: /api/userinfo)

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const blogRoutes = require('./routes/blog');
const userRoutes = require('./routes/userManagement');
const authRoutes = require('./routes/auth');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

// ✅ Static File Serving for Images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ✅ MongoDB Connection
mongoose.connect('mongodb://localhost:27017/revaalo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api', userRoutes);

// ✅ Serve React frontend from build folder
app.use(express.static(path.join(__dirname, '../simple-profile-frontend/build')));

// ✅ Serve index.html for any unmatched route (except API)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../simple-profile-frontend/build/index.html'));
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
