const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
app.use(express.json());
const userAccount = require("./routes/user/user");

const url = "mongodb://127.0.0.1/nisalCarSaleDb";
mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("Mongo Db Connected");
});
app.use("/user", userAccount);

app.listen(PORT, () => {
  console.log("App is Running");
});
