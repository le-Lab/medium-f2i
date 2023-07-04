const {
  create,
  comments,
  applaud,
} = require("../controllers/articleController");

const router = require("express").Router();

router.post("/create", create);
router.post("/:id/comments", comments);
router.post("/:id/applaud", applaud);

module.exports = router;
