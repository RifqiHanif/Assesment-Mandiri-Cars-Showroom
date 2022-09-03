const express = require("express");
const router = express.Router();
const userRoute = require("./user.routes");
const carsRoute = require("./cars.routes");
const purchaseRoute = require("./purchase.routes");

const appRoutes = (app) => {
  app.use("/user", userRoute);
  app.use("/cars", carsRoute);
  app.use("/purchase", purchaseRoute);
};

module.exports = router;
