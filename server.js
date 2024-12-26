const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const emailRoutes = require('./emailRoutes');

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

