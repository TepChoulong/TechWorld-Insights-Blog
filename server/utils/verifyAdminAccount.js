import jwt from "jsonwebtoken";

const verifyAdminAccount = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token is missing",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid token Admin",
      });
    }

    if (user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "You are not an admin",
      });
    }

    req.user = user;
    next();
  });
};

export default verifyAdminAccount;
