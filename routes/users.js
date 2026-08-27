const router = require("express").Router();
const { getUsers, createUser, getUser } = require("../controllers/users");

router.get("/", getUsers);
router.get("/:userId", () => console.log("GET users"));
router.post("/", createUser);

module.exports = router;
