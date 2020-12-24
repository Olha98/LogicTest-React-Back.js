const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    passwordHash: { type: String },
    aboutMySelf: { type: String },
    skills: { type: String },
    projectsExperience: { type: String },
    workExperience: { type: String },
    contactsPhone: { type: String },
    tokens: [
      {
        token: { type: String },
        expires: { type: Date },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);