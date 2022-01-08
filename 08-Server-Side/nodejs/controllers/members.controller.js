const Member = require("../models/member.js");

const findAll = async (req, res) => {
    const members = await Member.findAll();
    res.status(200).send({
        members,
    });
};

const find = async (req, res) => {
    const member = Member.find(req.params.id);
    res.status(200).send({
        member,
    });
};

const add = (req, res) => {
    const newMember = new Member(req.body);
    const message = newMember.save();
    res.status(201).send({
        message,
        newMember,
    });
};

const remove = (req, res) => {
    const removed = Member.remove(req.params.id);
    res.status(202).send({
        removed,
    });
};

module.exports = {find, findAll, add, remove};
