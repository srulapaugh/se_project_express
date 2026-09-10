const router = require("express").Router();
const auth = require("../middlewares/auth");
const { getCurrentUser } = require("../controllers/users");
const { updateProfile } = require("../controllers/users");

router.use(auth);

router.get("/me", getCurrentUser);
router.patch("/me", updateProfile);

module.exports = router;
