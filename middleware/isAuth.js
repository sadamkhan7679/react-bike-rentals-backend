const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  // const token = req.headers.authorization;
  // const token = req.cookies.jwt;

  const token = req.get("Authorization").split(" ")[1];
  if (!token) {
    return res.status(401).json({
      error: "Not authenticated",
    });
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      error: "You are not authenticated",
    });
  }

  if (!decodedToken) {
    return res.status(401).json({
      error: "You are not authenticated",
    });
  }

  const { id } = decodedToken;

  req.userId = id;

  console.log("decodedToken", decodedToken);

  next();
};

module.exports = {
  isAuth,
};
