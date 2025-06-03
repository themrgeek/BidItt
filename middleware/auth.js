// middleware/auth.js
const jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = { id: decoded.id, role: decoded.role }; // Attach user to request
  next();
};

const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.status(403).send("Forbidden");
  next();
};