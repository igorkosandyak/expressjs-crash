const express = require('express');
const router = express.Router();

const MembersService = require('../../services/members-service');

//GET
router.get('/', (req, res) => MembersService.getAll(req, res));
router.get('/:id', (req, res) => MembersService.get(req.params.id, res));

//POST
router.post('/', (req, res) => MembersService.create(req, res));

module.exports = router;

