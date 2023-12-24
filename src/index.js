const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

const productController = require("./product/product.controller");
app.use("/products", productController);

const newsController = require("./news/news.controller");
app.use("/news/Api", newsController);

app.listen(PORT, () => {
  console.log(`Express API running in port ${PORT}`);
});

