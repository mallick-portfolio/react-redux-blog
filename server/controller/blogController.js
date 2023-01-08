const {
  getBlogsServices,
  createBlogServices,
  updatedBlogByIdServices,
  getBlogByIdServices,
  deleteBlogByIdServices,
} = require("../services/blogServices");

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await getBlogsServices();
    if (blogs.length) {
      return res.status(200).json({
        status: "success",
        message: "Blogs get successfully",
        data: blogs,
        error: false,
      });
    } else {
      return res.status(404).json({
        status: "failed",
        message: "Failed to get blog",
        data: false,
        error: true,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await getBlogByIdServices(req.params.id);
    if (blog._id) {
      return res.status(200).json({
        status: "success",
        message: "Blog get successfully",
        data: blog,
        error: false,
      });
    } else {
      return res.status(404).json({
        status: "failed",
        message: "Failed to get blog",
        data: false,
        error: true,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.createNewBlog = async (req, res, next) => {
  try {
    const blog = await createBlogServices(req.body);
    console.log(blog);
    if (blog._id) {
      return res.status(201).json({
        status: "success",
        message: "Blogs create successfully",
        data: blog,
        error: false,
      });
    } else {
      return res.status(404).json({
        status: "failed",
        message: "Failed to add new blog",
        data: false,
        error: true,
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.updateBlogByID = async (req, res, next) => {
  try {
    const blog = await updatedBlogByIdServices(req.body, req.params.id);
    if (blog.modifiedCount) {
      return res.status(201).json({
        status: "success",
        message: "Blogs update successfully",
        error: false,
      });
    } else {
      return res.status(404).json({
        status: "failed",
        message: "Blog not found with this id",
        error: true,
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.deleteBlogByID = async (req, res, next) => {
  try {
    const blog = await deleteBlogByIdServices(req.params.id);
    if (blog.deletedCount) {
      return res.status(201).json({
        status: "success",
        message: "Blogs delete successfully",
        error: false,
      });
    } else {
      return res.status(404).json({
        status: "failed",
        message: "Blog not found with this id",
        error: true,
      });
    }
  } catch (error) {
    next(error);
  }
};
