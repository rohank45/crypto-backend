const express = require("express");
const router = express.Router();
const User = require("../../models/userSchema");
const authMiddleWare = require("../../middleware/authMiddleWare");

router.post("/buy/coins", authMiddleWare, async (req, res) => {
  try {
    const loginUser = await User.findById(req.user.id);
    loginUser.myCoins.unshift(req.body.myCoins);
    await loginUser.save();

    res.status(200).json({ message: "Coin buy Successfully!" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
