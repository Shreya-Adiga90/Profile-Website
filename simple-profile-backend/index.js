const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blog');   // Use only one import for blog routes
const userRoutes = require("./routes/userManagement");

const app = express();

app.use(cors());
app.use(express.json());

const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'public/images')));


mongoose.connect('mongodb://localhost:27017/revaalo')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Mount routes AFTER app initialization
app.use('/api/blogs', blogRoutes);
app.use("/api", userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
