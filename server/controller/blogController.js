const { getBlogsServices } = require("../services/blogServices");

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await getBlogsServices();
    console.log(blogs);
    res.status(200).json({
      status: "success",
      message: "Blogs get successfully",
      data: blogs,
      error: false,
    });
  } catch (error) {
    next(error);
  }
};
