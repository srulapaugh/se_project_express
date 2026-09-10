const router = require("express").Router();
const auth = require("../middlewares/auth");
const { getCurrentUser } = require("../controllers/users");

router.use(auth);

router.get("/me", getCurrentUser);
router.patch("users/me", updateProfile);

module.exports = router;
