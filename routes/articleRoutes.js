const {
  create,
  comments,
  applaud,
} = require("../controllers/articleController");

const router = require("express").Router();

router.get('/create', (req,res) =>{
  res.render('create')
})
router.post("/create", create);
router.post("/:id/comments", comments);
router.post("/:id/applaud", applaud);

module.exports = router;
