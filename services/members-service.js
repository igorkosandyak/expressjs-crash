const uuid = require('uuid');
const members = require('../repositories/Members');
const request = require("request");

const Member = require('./../models/Member');


const create = async (req, res) => {
    
    const member = new Member({
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        age : req.body.age
    });
    
    try {
        res.status(200).json(await member.save());
    } catch(err) {
        res.status(400).json({message : err})
    }

};

const get = (id, res) => {
    let member = members.filter(m => m.id == parseInt(id));
    if (member.length === 0) {
        res.status(400).json({ msg: `Member with ID ${id} not found` })
    } else {
        res.send(member);
    }
}

const getAll = async (req, res) => {
    try {
        res.status(200).json(await Member.find());
    } catch (err) {
        res.status(500).json({message : err});
    }

}

module.exports = {
    create,
    get,
    getAll
};