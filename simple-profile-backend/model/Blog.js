<<<<<<< HEAD
/*const mongoose = require('mongoose');
=======
const mongoose = require('mongoose');
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Anonymous' },
  createdAt: { type: Date, default: Date.now }
});

<<<<<<< HEAD
module.exports = mongoose.model('Blog', blogSchema);
*/
/*const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Anonymous' },
  createdAt: { type: Date, default: Date.now },
  slug: { type: String, unique: true }
});

// ✅ Slug generation hook
blogSchema.pre('save', function (next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('Blog', blogSchema);
*/
const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Shreya Adiga' }, // ✅ Set default here
  createdAt: { type: Date, default: Date.now },
  slug: { type: String, unique: true }
});

blogSchema.pre('save', function (next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  this.author = 'Shreya Adiga'; // ✅ Force author value every time
  next();
});

module.exports = mongoose.model('Blog', blogSchema);

=======
module.exports = mongoose.model('Blog', blogSchema);
>>>>>>> ae2759d80d34be3598a89db82fdc1bfc4f3d1104
