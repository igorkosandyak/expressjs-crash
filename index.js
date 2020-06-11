const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");

const logger = require('./middleaware/logger');

const app = express();

//Body Parser Middleaware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connect to DB
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('Database connectsion established. Listening to 27017 port'));

//Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT} port`));