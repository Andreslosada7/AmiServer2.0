const express = require("express");
const db = require("./database/database");

const app = express();

const paymentMethodRouter = require("./routes/paymentMethod");
const productRouter = require("./routes/product");
const categoriesRouter = require("./routes/category");
const recordRouter = require("./routes/record");
const recordProductRouter = require("./routes/recordProducts");
const cors = require('cors');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);
app.use("/api/category", categoriesRouter);
app.use("/api/paymentmethod", paymentMethodRouter);
app.use("/api/record", recordRouter);
app.use("/api/recordproduct", recordProductRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Get data has sucesfully.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
