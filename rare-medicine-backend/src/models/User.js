// src/models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'shop', 'hospital', 'admin'],
    default: 'user',
  },
}, { timestamps: true });

// Virtual for password set
userSchema.virtual('password')
  .set(function (pwd) {
    this.passwordHash = bcrypt.hashSync(pwd, 10);
  })
  .get(function () { return undefined; });

userSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compareSync(candidate, this.passwordHash);
};

export default model('User', userSchema);
