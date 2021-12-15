const Student = require("../models/student.js");

const findAll = (req, res) => {
    const students = Student.findAll();
    res.status(200).send({students});
};

const find = (req, res) => {
    const student = Student.find(req.params.id);
    res.status(200).send({student});
};

const create = (req, res) => {
    const newStudent = new Student(req.body);
    const message = newStudent.save();
    res.status(201).send({message, newStudent});
};

const deleted = (req, res) => {
    const message = Student.deleted(req.params.id);
    res.status(200).send({message});
};

module.exports = {findAll, find, create, deleted};
