const Student = require("../models/student.js");

const findAll = (req, res) => {
    const students = Student.findAll();
    res.status(200).send({students});
};

const findSpecific = (req, res) => {
    const student = Student.findSpecific(req.params.id);
    res.status(200).send({student});
};

const addStudent = (req, res) => {
    const student = new Student(req.body);
    const message = student.save();
    res.status(201).send({message, student});
};

const deleteSpecific = (req, res) => {
    const message = Student.deleteSpecific(req.params.id);
    res.status(200).send({message});
};

module.exports = {Student, findAll, findSpecific, addStudent, deleteSpecific};
