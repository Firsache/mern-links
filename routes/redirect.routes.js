const { Router } = require("express");
const Link = require("../models/Link");

const router = Router();

router.get("/:code", async () => {
  try {
    const link = await Link.findOne({ code: req.params.code });
    if (link) {
      link.clicks++;
      await link.save();
      return res.redirect(link.from);
    }
    res.status(404).json("Link is not found");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
