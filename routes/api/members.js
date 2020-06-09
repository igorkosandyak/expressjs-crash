const express = require('express');
const uuid = require('uuid');
const MembersService = require('./../../services/members-service')

const router = express.Router();

router.get('/', (req, res) => MembersService.getAllMembers(res));
router.get('/:id', (req, res) => MembersService.getMember(req.params.id, res));
router.post('/', (req, res) => MembersService.createNewMember(req, res));

module.exports = router;