const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  validateCardBody,
  validateItemId,
} = require("../middlewares/validation");
const {
  getClothingItems,
  createClothingItem,
  deleteClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingitems");

router.get("/", getClothingItems);

router.use(auth);

router.post("/", validateCardBody, createClothingItem);
router.delete("/:itemId", validateItemId, deleteClothingItem);
router.put("/:itemId/likes", validateItemId, likeItem);
router.delete("/:itemId/likes", validateItemId, dislikeItem);

module.exports = router;
