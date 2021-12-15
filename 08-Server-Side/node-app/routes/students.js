const Router = require("express");
const students = require("../controllers/students.controller");

const router = Router();

router.get("/", students.findAll());

router.get("/:id", students.findSpecific());

router.post("/", students.addStudent());

router.delete("/:id", students.deleteSpecific());

module.exports = router;
