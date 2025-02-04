// /backend/nodejs/controllers/authController.js
const jwt = require('jsonwebtoken');

// Fake users data for demonstration
const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: 'user123' },
];

// Login controller
exports.login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
};
