const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userQueries = {
  users: async () => {
    try {
      const usersFetched = await User.find();
      return usersFetched.map((user) => {
        return {
          ...user._doc,
        };
      });
    } catch (error) {
      throw error;
    }
  },
};

const userMutations = {
  createUser: async (_, args) => {
    try {
      const { name, email, password, photo } = args.user;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
        photo: photo,
      });

      const token = jwt.sign(
        { userId: user.userId, email: user.email },
        "secret-key",
        { expiresIn: "1h" }
      );
      user["token"] = token;

      const newUser = await user.save();
      return {
        userId: newUser.userId,
        email: newUser.email,
        token: newUser.token,
      };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = { userQueries, userMutations };
