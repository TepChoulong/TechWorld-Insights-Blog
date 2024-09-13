import jwt from "jsonwebtoken";

const verifyModeratorAccount = (req, res, next) => {
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
        message: "Invalid token Moderator",
      });
    }

    if (user.role === "admin" || user.role === "moderator") {
      req.user = user;
      next();
    } else if (user.role !== "moderator") {
      return res.status(401).json({
        success: false,
        message: "You are not a moderator",
      });
    }
  });
};

export default verifyModeratorAccount;
