const uuid = require('uuid');
const members = require('./../Members');

     createNewMember = (req, res) => {
        const newMember = {
            id : uuid.v4(),
            name : req.body.name,
            email : req.body.email
        };
        if (!newMember.name || !newMember.email) {
            res.status(400).json({msg : 'Email and Name should not be empty'})
        } else {
            members.push(newMember);
            res.json({'status' : 'Success', 'members' : members})
        }
        

        
    };

    getMember = (id, res) => {
        let member = members.filter(m => m.id == parseInt(id));
        if (member.length === 0) {
            res.status(400).json({msg : `Member with ID ${id} not found`})
        } else {
            res.send(member);        
        }
    }

    getAllMembers = (res) => {
        res.json(members);
    }

module.exports = {
    createNewMember,
    getMember,
    getAllMembers
};