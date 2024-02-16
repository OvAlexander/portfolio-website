const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middlewares
app.use(cors());
app.use(express.json());

// API routes (define your routes here)
app.get('/api/data', (req, res) => {
    res.json({message: 'Hello from Express server!'});
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
