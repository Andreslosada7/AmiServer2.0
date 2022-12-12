const express = require("express");
const db = require("./database/database");

const app = express();

const product = require("./api/product");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
