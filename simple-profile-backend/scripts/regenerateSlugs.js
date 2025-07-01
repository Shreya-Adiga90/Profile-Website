/*const mongoose = require('mongoose');
const Blog = require('../model/Blog'); // ✅ Adjust path if needed

const run = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/blogs');

    // ✅ Find blogs with missing, null, empty, or undefined slugs
    const blogs = await Blog.find();

    let fixedCount = 0;

    for (let blog of blogs) {
      if (!blog.slug || typeof blog.slug !== 'string' || blog.slug.trim() === '') {
        console.log(`🔧 Fixing slug for: ${blog.title}`);
        await blog.save(); // triggers pre-save slug generation
        fixedCount++;
      }
    }

    console.log(`✅ Slugs updated for ${fixedCount} blogs.`);
    process.exit();
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

run();
*/
// regenerateSlugs.js
// scripts/regenerateSlugs.js
// scripts/regenerateSlugs.js
const mongoose = require('mongoose');
const Blog = require('../model/Blog'); // correct path

const run = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/revaalo');

    // ✅ Fetch ALL blogs
    const blogs = await Blog.find();

    console.log(`🛠 Found ${blogs.length} blogs`);

    for (const blog of blogs) {
      // Skip if slug already exists
      if (blog.slug && blog.slug.trim() !== '') {
        console.log(`⏩ Skipping (already has slug): ${blog.title}`);
        continue;
      }

      // ✅ Force slug regeneration
      blog.slug = undefined;
      blog.markModified('title');
      await blog.save();

      console.log(`✅ Updated: ${blog.title} → ${blog.slug}`);
    }

    console.log("🎉 All missing slugs regenerated");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error regenerating slugs:", err);
    process.exit(1);
  }
};

run();


