const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const audioRoutes = require("./routes/audio");

app.use(cors());
app.use(express.json());

app.use("/", audioRoutes);
app.use("/audio", express.static("./public/audio"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
