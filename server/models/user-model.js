const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Schema of table or fields of tables
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
});

// secure password with mongodb
userSchema.pre("save", async function () {
  // console.log("pre methiod",this);
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

//json web token
userSchema.methods.generateToken = async function () {
  try {
    const json = jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        is_admin: this.is_admin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    return json;
  } catch (error) {
    console.log(error);
  }
};

//define the model or the collection name
const User = new mongoose.model("Users", userSchema);

module.exports = User;
