const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const ADMIN_PASSWORD = "admin123"; // 🔐 Set your password here
const SECRET_KEY = "secretkey"; // Use strong secret in production

router.post("/login", (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ isAdmin: true }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid password" });
  }
});

module.exports = router;

