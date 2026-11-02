require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'webprogram API is running' }));
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
