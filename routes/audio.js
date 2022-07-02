const express = require("express");
const router = express.Router();
const PORT = 8080;
const url = "http://localhost";

router.get("/atmospheric", (req, res) => {
  res.status(200).json({
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

router.get("/hyacintho", (req, res) => {
  res.status(200).json({
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

module.exports = router;
