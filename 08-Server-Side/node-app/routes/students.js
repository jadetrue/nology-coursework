const Router = require("express");
const students = require("../controllers/students.controller.js");

const router = Router();

router.get("/", students.findAll);

router.get("/:id", students.find);

router.post("/", students.create);

router.delete("/:id", students.deleted);

module.exports = router;
