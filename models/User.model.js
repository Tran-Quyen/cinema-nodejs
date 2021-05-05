const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  avatarUrl: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema, "User");

module.exports = {
    UserSchema,
    User
}