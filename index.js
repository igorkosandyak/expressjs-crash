const PORT = process.env.PORT || 5000;

const express = require('express');
const path = require('path');
const members = require('./Members');

const logger = require('./middleaware/logger');

const app = express();


//init middleaware
// app.use(logger);

app.get('/api/members', (req, res) => res.json(members));

//get single member
app.get('/api/members/:id', (req, res) => {
    let member = members.filter(m => m.id == parseInt(req.params.id));
    console.log('Member: ', member);
    if (member.length === 0) {
        res.status(400).json({msg : `Member with ID ${req.params.id} not found`})
    } else {
        res.send(member);        
    }
});


//set a static folder
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`);
});