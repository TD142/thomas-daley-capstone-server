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
    id: "1",
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

app.get("/hyacintho", (req, res) => {
  res.json({
    id: "2",
    name: "atmospheric",
    bass: `${url}:${PORT}/audio/hyacintho-bass.wav`,
    pad1: `${url}:${PORT}/audio/hyacintho-pad1.wav`,
    pad2: `${url}:${PORT}/audio/hyacintho-pad2.wav`,
    arp: `${url}:${PORT}/audio/hyacintho-arp.wav`,
    lead1: `${url}:${PORT}/audio/hyacintho-lead1.wav`,
    lead2: `${url}:${PORT}/audio/hyacintho-lead2.wav`,
    lead3: `${url}:${PORT}/audio/hyacintho-lead3.wav`,
    drone: `${url}:${PORT}/audio/hyacintho-drone.wav`,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
