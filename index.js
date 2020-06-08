const PORT = process.env.PORT || 5000;

const express = require('express');
const path = require('path');

const logger = require('./middleaware/logger');

const app = express();


//init middleaware
// app.use(logger);


//set a static folder
// app.use(express.static(path.join(__dirname, 'public')))

//Members API routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`);
});