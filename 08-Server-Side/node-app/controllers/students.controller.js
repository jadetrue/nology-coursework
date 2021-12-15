const findAll = (req, res) => {
    res.status(200).send({message: "All students display here"});
};

const find = (req, res) => {
    res.status(200).send({message: "One specific student to display here"});
};

const create = (req, res) => {
    res.status(201).send({message: "Create a new student"});
};

const deleted = (req, res) => {
    res.status(200).send({message: "Delete a student"});
};

module.exports = {findAll, find, create, deleted};
