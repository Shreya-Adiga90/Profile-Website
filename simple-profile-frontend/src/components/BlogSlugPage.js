/*import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // <-- include Link
import axios from 'axios';

function BlogSlugPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log("Slug:", slug);
    if (!slug) return;

    axios.get(`http://localhost:5000/api/blogs/slug/${slug}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [slug]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      
      
      <div style={{ marginBottom: '20px' }}>
        <Link to="/blog" style={{
          display: 'inline-block',
          padding: '10px 16px',
          backgroundColor: '#facc15',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#000',
          fontWeight: 'bold',
          boxShadow: '0 0 5px rgba(0,0,0,0.1)'
        }}>
          ← Back to Blog
        </Link>
      </div>

      <h1>{blog.title}</h1>
      <p><strong>Author:</strong> {blog.author || 'Anonymous'}</p>
      <p><strong>Posted:</strong> {new Date(blog.createdAt).toLocaleDateString()}</p>
      <div
        style={{
          whiteSpace: 'pre-wrap',
          marginTop: '20px',
          lineHeight: '1.6',
          fontSize: '1.1rem',
        }}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}

export default BlogSlugPage;
*/
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function BlogSlugPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!slug) return;

    axios.get(`http://localhost:5000/api/blogs/slug/${slug}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [slug]);

  if (!blog) return <div style={{ textAlign: "center", padding: "50px" }}>Loading blog...</div>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Back Button */}
        <div style={{ marginBottom: "20px" }}>
          <Link
            to="/blog"
            style={{
              display: "inline-block",
              padding: "10px 16px",
              backgroundColor: "#facc15",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Blog Title & Info */}
        <h1 style={{ fontSize: "2rem", marginBottom: "10px", color: "#1e293b" }}>
          {blog.title}
        </h1>
        <p style={{ marginBottom: "5px", color: "#475569" }}>
          <strong>Author:</strong> {blog.author || "Anonymous"}
        </p>
        <p style={{ marginBottom: "20px", color: "#475569" }}>
          <strong>Posted:</strong> {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        {/* Blog Content with Styling Container */}
        <div
          className="blog-content"
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
            fontSize: "1.1rem",
            color: "#334155",
          }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Inline style tag to contain image and element rules */}
        <style>{`
          .blog-content img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 20px auto;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .blog-content h1, 
          .blog-content h2, 
          .blog-content h3 {
            margin-top: 24px;
            margin-bottom: 12px;
            color: #1e3a8a;
          }

          .blog-content p {
            margin-bottom: 16px;
          }

          .blog-content ul {
            padding-left: 20px;
            margin-bottom: 16px;
          }

          .blog-content a {
            color: #2563eb;
            text-decoration: underline;
          }

          .blog-content iframe {
            max-width: 100%;
            display: block;
            margin: 20px auto;
          }
        `}</style>
      </div>
    </div>
  );
}

export default BlogSlugPage;
