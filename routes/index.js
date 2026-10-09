const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const {
  validateLogin,
  validateUserBody,
} = require("../middlewares/validation");
const { NotFoundError } = require("../middlewares/error-handler");

const itemRouter = require("./clothingitems");
const userRouter = require("./users");

router.post("/signin", validateLogin, login);
router.post("/signup", validateUserBody, createUser);

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
