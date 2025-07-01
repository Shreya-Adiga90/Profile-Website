/*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  const deleteBlog = (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    axios
      .delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
        if (selectedBlog?._id === id) setSelectedBlog(null);
      })
      .catch((err) => console.error("Error deleting blog:", err));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        password,
      });
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      setShowAuthBox(false);
      setPassword("");
    } catch (err) {
      alert("Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
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
      
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/" className="top-button">Home</Link>

        {!isAuthenticated ? (
          <button onClick={() => setShowAuthBox(true)} className="top-button">
            User
          </button>
        ) : (
          <button onClick={handleLogout} className="top-button">
            Logout
          </button>
        )}
      </div>

      
      {showAuthBox && (
        <div
          className="blog-form-container"
          style={{
            width: "360px",
            padding: "20px",
            position: "fixed",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h3>Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            style={{
              width: "80%",
              margin: "10px auto",
              display: "block",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button onClick={handleLogin} className="submit-btn">Login</button>
          <button
            onClick={() => setShowAuthBox(false)}
            className="submit-btn"
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      )}

      
      {!showAuthBox && (
        <div
          style={{
            display: "flex",
            marginTop: "100px",
            maxHeight: "80vh",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          
          <div
            style={{
              width: "300px",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "15px",
              borderRadius: "10px",
              color: "white",
              overflowY: "auto",
              flexShrink: 0,
            }}
          >
            {isAuthenticated && (
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
            )}

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

          
          <div
            style={{
              flex: 1,
              padding: "25px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflowY: "auto",
              overflowX: "hidden",
              marginLeft: "20px", // GAP between boxes
            }}
          >
            {selectedBlog ? (
              <div>
                <h2>{selectedBlog.title}</h2>
                <div
                  style={{
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                  }}
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
                {isAuthenticated && (
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
                )}
              </div>
            ) : (
              <p style={{ color: "black" }}>
                Select a blog from the left to see details.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogList;
*/

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => {
        console.log("🧪 Blogs fetched from backend:", res.data); // ✅ Log blogs array
        setBlogs(res.data);
      })
      .catch((err) => console.error("Error fetching blogs:", err));

    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  const deleteBlog = (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    axios
      .delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => setBlogs((prev) => prev.filter((blog) => blog._id !== id)))
      .catch((err) => console.error("Error deleting blog:", err));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        password,
      });
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      setShowAuthBox(false);
      setPassword("");
    } catch (err) {
      alert("Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
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
        <Link to="/" className="top-button">Home</Link>

        {!isAuthenticated ? (
          <button onClick={() => setShowAuthBox(true)} className="top-button">
            User
          </button>
        ) : (
          <button onClick={handleLogout} className="top-button">
            Logout
          </button>
        )}
      </div>

      {/* Auth Box */}
      {showAuthBox && (
        <div
          className="blog-form-container"
          style={{
            width: "360px",
            padding: "20px",
            position: "fixed",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h3>Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            style={{
              width: "80%",
              margin: "10px auto",
              display: "block",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button onClick={handleLogin} className="submit-btn">Login</button>
          <button
            onClick={() => setShowAuthBox(false)}
            className="submit-btn"
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Blog View */}
      {!showAuthBox && (
        <div
          style={{
            display: "flex",
            marginTop: "100px",
            maxHeight: "80vh",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          {/* Sidebar Blog List */}
          <div
            style={{
              width: "300px",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "15px",
              borderRadius: "10px",
              color: "white",
              overflowY: "auto",
              flexShrink: 0,
            }}
          >
            {isAuthenticated && (
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
            )}

            <h3>Blogs</h3>
            {blogs.length === 0 ? (
              <p>No blogs found</p>
            ) : (
              blogs.map((blog) => {
                console.log("🔎 Individual blog:", blog); // ✅ Log individual blog
                return (
                  <div key={blog._id} style={{ marginBottom: "10px" }}>
                    {blog.slug ? (
                      <Link
                        to={`/blog/slug/${blog.slug}`}
                        style={{
                          display: "block",
                          padding: "8px",
                          backgroundColor: "#facc15",
                          color: "#000",
                          borderRadius: "4px",
                          textDecoration: "none",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {blog.title}
                      </Link>
                    ) : (
                      <span
                        style={{
                          display: "block",
                          padding: "8px",
                          backgroundColor: "gray",
                          color: "white",
                          borderRadius: "4px",
                          textAlign: "center",
                        }}
                      >
                        {blog.title} (missing slug)
                      </span>
                    )}
                    {isAuthenticated && (
                      <div style={{ textAlign: "center", marginTop: "4px" }}>
                        <Link to={`/edit/${blog._id}`}>
                          <button style={{ marginRight: "8px" }}>Edit</button>
                        </Link>
                        <button
                          onClick={() => deleteBlog(blog._id)}
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            padding: "6px 10px",
                            borderRadius: "4px",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Placeholder right side */}
          <div
            style={{
              flex: 1,
              padding: "25px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflowY: "auto",
              overflowX: "hidden",
              marginLeft: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#555",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            <p>Select a blog title to view full post.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogList;

