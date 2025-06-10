import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => {
        setBlogs(res.data);
        if (res.data.length > 0) setSelectedBlog(res.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);

  const deleteBlog = (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    axios
      .delete(`http://localhost:5000/api/blogs/${id}`)
      .then(() => {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
        if (selectedBlog?._id === id) setSelectedBlog(null);
      })
      .catch((err) => console.error("Error deleting blog:", err));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/Blog-Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Top Buttons */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/" style={buttonStyle}>Home</Link>
        {/*<Link to="/blog" style={buttonStyle}>Blog</Link>*/}
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", marginTop: "100px", gap: "20px" }}>
        {/* Blog Sidebar */}
        <div
          style={{
            width: "300px",
            backgroundColor: "rgba(0,0,0,0.7)",
            padding: "15px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <Link
            to="/add"
            style={{
              display: "block",
              backgroundColor: "#facc15",
              color: "#000",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "6px",
              textAlign: "center",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            + Add New Blog
          </Link>

          <h3>Blogs</h3>
          {blogs.length === 0 ? (
            <p>No blogs found</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog._id}
                onClick={() => setSelectedBlog(blog)}
                style={{
                  padding: "8px",
                  margin: "4px 0",
                  backgroundColor:
                    selectedBlog?._id === blog._id ? "#facc15" : "transparent",
                  color:
                    selectedBlog?._id === blog._id ? "#000" : "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {blog.title}
              </div>
            ))
          )}
        </div>

        {/* Blog Content Display */}
        <div style={{ flexGrow: 1, color: "black" }}>
          {selectedBlog ? (
            <div
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            >
              <h2>{selectedBlog.title}</h2>
              <p style={{ whiteSpace: "pre-wrap" }}>{selectedBlog.content}</p>

              <div style={{ marginTop: "20px" }}>
                <Link to={`/edit/${selectedBlog._id}`}>
                  <button style={{ marginRight: "10px" }}>Edit</button>
                </Link>
                <button
                  onClick={() => deleteBlog(selectedBlog._id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "4px",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <p style={{ color: "white" }}>
              Select a blog from the left to see details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#fff",
  color: "#000",
  padding: "10px 20px",
  borderRadius: "6px",
  fontWeight: "bold",
  textDecoration: "none",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
};

export default BlogList;
