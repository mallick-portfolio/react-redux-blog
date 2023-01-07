const mongoose = require("mongoose");
const dbConnection = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.et8whgd.mongodb.net/blog?retryWrites=true&w=majority`
    )
    .then(() => console.log("DB connection successfull".bold.red))
    .catch((err) => console.log(err));
};
module.exports = dbConnection;
