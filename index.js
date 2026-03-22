const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

console.log("LOGIN FORM SYSTEM 🚀");

// Home (Login Form)
app.get("/", (req, res) => {
  res.send(`
    <h2>Login Page</h2>

    <p><b>Use this to test:</b></p>
    <p>Email: test@gmail.com</p>
    <p>Password: 123456</p>

    <form action="/login" method="POST">
      <input type="email" name="email" placeholder="Enter Email" required /><br><br>
      <input type="password" name="password" placeholder="Enter Password" required /><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Login check
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "123456") {
    res.send("Login Successful ✅ (Authorized User)");
  } else {
    res.send("Unauthorized ❌");
  }
});

// Server start
app.listen(5003, () => {
  console.log("Server running on port 5003");
});