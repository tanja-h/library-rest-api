const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users.js');
require('dotenv/config');

const app = express();
const PORT = 5000;
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());

//import routes
app.use('/users', usersRoutes);

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello from hp');
});

//connect to DB
// try {
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
    .then(() => console.log('Connected to DB!'))
    .catch(err => console.log('Error connecting to DB: ', err))

//listen to server
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
//nevena