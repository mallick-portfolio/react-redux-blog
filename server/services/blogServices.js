const Blog = require("../models/blog.model");

exports.getBlogsServices = async () => {
  const result = await Blog.find({});
  return result;
};
