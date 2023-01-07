const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

router
  .route("/")
  .get(blogController.getBlogs)
  .post(blogController.createNewBlog);
router
  .route("/:id")
  .patch(blogController.updateBlogByID)
  .get(blogController.getBlogById)
  .delete(blogController.deleteBlogByID);
module.exports = router;
