// backend/server.js
const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "myprojectchemdb",
  password: "Dhiru@231217", // ⚠️ move to .env in production
  port: 5432,
});

// Ensure users table exists
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`);

// ✅ Contact registration endpoint (fixed)
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        subject VARCHAR(255),
        message TEXT
      )
    `);

    await pool.query(
      "INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4)",
      [name, email, subject, message]
    );

    res.status(201).json({ message: "Contact registered successfully" });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ error: "Contact registration failed" });
  }
});

// ✅ Registration endpoint (improved)
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2)",
      [username, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err);

    if (err.code === "23505") {
      // Unique violation in PostgreSQL
      return res.status(400).json({ error: "Username already exists" });
    }

    res.status(500).json({ error: "Server error during registration" });
  }
});

// ✅ Login endpoint
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
