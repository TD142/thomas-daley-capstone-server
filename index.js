const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const url = "http://localhost";

app.use(cors());
app.use(express.json());
app.use("/audio", express.static("./public/audio"));

app.get("/atmospheric", (req, res) => {
  res.json({
    id: "8b413a9c-ad21-42d3-a992-34b930312643",
    name: "atmospheric",
    bass: `${url}:${PORT}/audio/atmospheric-bass.wav`,
    pad1: `${url}:${PORT}/audio/atmospheric-pad1.wav`,
    pad2: `${url}:${PORT}/audio/atmospheric-pad2.wav`,
    arp: `${url}:${PORT}/audio/atmospheric-arp.wav`,
    lead1: `${url}:${PORT}/audio/atmospheric-lead1.wav`,
    lead2: `${url}:${PORT}/audio/atmospheric-lead2.wav`,
    lead3: `${url}:${PORT}/audio/atmospheric-lead3.wav`,
    drone: `${url}:${PORT}/audio/atmospheric-drone.wav`,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
