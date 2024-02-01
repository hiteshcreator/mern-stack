const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).send({ message: "welcome in controller" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ msg: "email already exists.." });
    }

    const userCreated = await User.create({ username, email, password, phone });

    res.status(201).json({
      data: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const hashPassword = async (password) => {
  try {
    //hash password
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);
    return hashPassword;
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
const dashboard = async (req, res) => {
  try {
    res.status(200).send({ message: "welcome to dashboard" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = { home, register, dashboard };
