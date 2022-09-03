const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.routes");
const carsRoute = require("./routes/cars.routes");
const purchaseRoute = require("./routes/purchase.routes")

const run = () => {
  app.use(express.json());
  app.use("/user", userRoute);
  app.use("/auth", authRoute);
  app.use("/cars", carsRoute);
  app.use("/purchase", purchaseRoute);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

module.exports = run;
