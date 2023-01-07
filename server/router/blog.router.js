const express = require("express");
const { getBlogs } = require("../controller/blogController");
const router = express.Router();

router.route("/").get(getBlogs);
module.exports = router;
