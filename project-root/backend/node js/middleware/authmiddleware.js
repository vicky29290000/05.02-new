const jwt = require('jsonwebtoken');

exports.isAdmin = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Access forbidden" });
    }

    req.user = decoded;
    next();
  });
};
