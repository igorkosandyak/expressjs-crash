const express = require('express');
const members = require('./Members');

const router = express.Router();

router.get('/', (req, res) => res.json(members));

router.get('/:id', (req, res) => {
    let member = members.filter(m => m.id == parseInt(req.params.id));
    console.log('Member: ', member);
    if (member.length === 0) {
        res.status(400).json({msg : `Member with ID ${req.params.id} not found`})
    } else {
        res.send(member);        
    }
});

module.exports = router;