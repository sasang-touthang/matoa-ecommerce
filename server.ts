const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();
// @ts-ignore
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Routes
const userRoutes = require("./router/userRoutes");
const productRoutes = require("./router/productRoutes");
const orderRoutes = require("./router/orderRoutes");
const cartRoutes = require("./router/cartRoutes");

// constants
const api = process.env.API_URL;
const mongoURI = process.env.DATABASE_URI;
const PORT = process.env.PORT;

app.use(`${api}/users`, userRoutes);
app.use(`${api}/products`, productRoutes);
app.use(`${api}/orders`, orderRoutes);
app.use(`${api}/carts`, cartRoutes);

mongoose
  .connect(mongoURI)
  .then((): void => {
    app.listen(PORT, () => {
      console.log("Server is connected!");
    });
  })
  .catch((err: any): void => {
    console.log(err);
  });
