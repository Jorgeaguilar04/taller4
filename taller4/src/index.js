const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");


const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/api", userRoute);


app.get("/", (req, res) => {
  res.send("ESCRIBA SU MENSAJE AQUI");
});

app.get("/", (req, res) => {
  res.use("/api", mensajerecibido)
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));


app.listen(port, () => console.log("Server listening to", port));
