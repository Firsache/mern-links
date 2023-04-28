const { Router } = require("express");
const nanoid = require("nanoid");
const config = require("config");
const Link = require("../models/Link");
const auth = require("../middleware/auth.middleware");

const router = Router();

router.post("/generate", auth, async (req, res) => {
  try {
    const baseUrl = config.get("baseUrl");
    const { from } = req.body;
    const code = nanoid(10);

    await Link.findOne({ from });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/", auth, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId });
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);
    res.status(200).json(link);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
