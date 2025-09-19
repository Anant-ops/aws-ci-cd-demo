const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 80;

app.use(bodyParser.urlencoded({ extended: true }));

// Simple login page
app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input type="text" name="email" placeholder="Email" required/>
      <input type="password" name="password" placeholder="Password" required/>
      <button type="submit">Login</button>
    </form>
  `);
});

// Handle login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "hire-me@anshumat.org" && password === "HireMe@2025!") {
    res.send("✅ Login Successful! Welcome to the demo app.");
  } else {
    res.send("❌ Invalid credentials.");
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
