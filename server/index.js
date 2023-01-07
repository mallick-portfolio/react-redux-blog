const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const blogRouter = require("./router/blog.router");

const app = express();
const PORT = 5000 || process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

dotenv.config();



// route
app.use('/blog', blogRouter)

app.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`);
});
