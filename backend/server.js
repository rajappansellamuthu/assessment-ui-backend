const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
