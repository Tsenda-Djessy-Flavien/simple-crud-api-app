const express = require("express");
const mongoose = require("mongoose");
const ProductRoute = require("../routes/product.route");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", ProductRoute);

// baseUrl
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello form node api server uploaded" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conneted to mongoDB database");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Conneted failed to mongoDB database");
  });
