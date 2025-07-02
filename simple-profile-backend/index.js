const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const blogRoutes = require('./routes/blog');
const userRoutes = require('./routes/userManagement');
 const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

mongoose.connect('mongodb://localhost:27017/revaalo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


 app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api', userRoutes);


app.use(express.static(path.join(__dirname, '../simple-profile-frontend/build')));

/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../simple-profile-frontend/build/index.html'));
});
*/
// Serve React app for all non-API routes
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../simple-profile-frontend/build/index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
