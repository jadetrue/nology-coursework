const Router = require("express");
const members = require("../controllers/members.controller.js");
const router = Router();

router.get("/", members.findAll);

router.get("/:id", members.find);

router.post("/", members.add);

router.delete("/:id", members.remove);

module.exports = router;
