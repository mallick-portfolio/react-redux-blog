const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("i am working");
  res.status(200).json({
    message: "success",
    error: false,
    data: true,
  });
});

module.exports = router