const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const blogRouter = require("./router/blog.router");
const colors = require("colors");
const dbConnection = require("./server");
const handleError = require("./middleware/errorHandler");
const app = express();
const PORT = 5000 || process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

dotenv.config();
dbConnection();

// route
app.use("/api/v1/blog", blogRouter);

// global error handler
app.use(handleError);
app.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`.underline.green.bold);
});
