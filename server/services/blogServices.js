const Blog = require("../models/blog.model");

exports.getBlogsServices = async () => {
  const result = await Blog.find({});
  return result;
};
exports.getBlogByIdServices = async (id) => {
  const result = await Blog.findOne({ _id: id });
  return result;
};
exports.createBlogServices = async (data) => {
  const result = await Blog.create(data);
  return result;
};
exports.updatedBlogByIdServices = async (data, id) => {
  const result = await Blog.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
exports.deleteBlogByIdServices = async (id) => {
  const result = await Blog.deleteOne({ _id: id });
  return result;
};
