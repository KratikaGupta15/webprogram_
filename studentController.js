const mongoose = require('mongoose');
const Student = require('../models/Student');

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// CREATE  POST /api/students
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    const status = err.code === 11000 ? 409 : 400;
    res.status(status).json({ message: err.code === 11000 ? 'Email already exists' : err.message });
  }
};

// READ ALL  GET /api/students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ONE  GET /api/students/:id
exports.getStudentById = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ message: 'Invalid ID' });
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE  PUT /api/students/:id
exports.updateStudent = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ message: 'Invalid ID' });
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    const status = err.code === 11000 ? 409 : 400;
    res.status(status).json({ message: err.code === 11000 ? 'Email already exists' : err.message });
  }
};

// DELETE  DELETE /api/students/:id
exports.deleteStudent = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ message: 'Invalid ID' });
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted', id: student._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
