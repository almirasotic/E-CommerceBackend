const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const keysecret = "dhuadfuadsufabsdfsdafkajdf";

const authenicate = async (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];

    console.log("TOKEN", token);

    const verifyToken = jwt.verify(token, keysecret);
    console.log("VERIFY TOKEN", verifyToken);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized:No token provided ovo ti vraca");
    console.log(error);
  }
};

module.exports = authenicate;
