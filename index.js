const express = require("express");
const db = require("./database/database");

const app = express();

const paymentMethodRouter = require("./routes/paymentMethod");
const productRouter = require("./routes/product");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/product", productRouter);
app.use("/api/paymentmethod", paymentMethodRouter);
app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Get data has sucesfully.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
