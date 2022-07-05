const express = require("express");
const router = express.Router();
const PORT = 8080;
const url = process.env.API_URI;

router.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Welcome! Please use /atmospheric or /hyacintho to retrieve audio files."
    );
});

router.get("/atmospheric", (req, res) => {
  res.status(200).json({
    id: "1",
    name: "atmospheric",
    bass: `${url}/audio/atmospheric-bass.wav`,
    pad1: `${url}/audio/atmospheric-pad1.wav`,
    pad2: `${url}/audio/atmospheric-pad2.wav`,
    arp: `${url}/audio/atmospheric-arp.wav`,
    lead1: `${url}/audio/atmospheric-lead1.wav`,
    lead2: `${url}/audio/atmospheric-lead2.wav`,
    lead3: `${url}/audio/atmospheric-lead3.wav`,
    drone: `${url}/audio/atmospheric-drone.wav`,
  });
});

router.get("/hyacintho", (req, res) => {
  res.status(200).json({
    id: "2",
    name: "atmospheric",
    bass: `${url}/audio/hyacintho-bass.wav`,
    pad1: `${url}/audio/hyacintho-pad1.wav`,
    pad2: `${url}/audio/hyacintho-pad2.wav`,
    arp: `${url}/audio/hyacintho-arp.wav`,
    lead1: `${url}/audio/hyacintho-lead1.wav`,
    lead2: `${url}/audio/hyacintho-lead2.wav`,
    lead3: `${url}/audio/hyacintho-lead3.wav`,
    drone: `${url}/audio/hyacintho-drone.wav`,
  });
});

module.exports = router;
