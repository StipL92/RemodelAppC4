const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "10d",
    }
  );
};

module.exports = generateToken;
