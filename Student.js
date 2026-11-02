const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    age: { type: Number, min: 1, max: 120 },
    course: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);
