const express = require("express");
const router = express.Router();
const url = process.env.API_URI || "http://localhost:8080";

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
    bass: `${url}/audio/atmospheric-bass.mp3`,
    pad1: `${url}/audio/atmospheric-pad1.mp3`,
    pad2: `${url}/audio/atmospheric-pad2.mp3`,
    arp: `${url}/audio/atmospheric-arp.mp3`,
    lead1: `${url}/audio/atmospheric-lead1.mp3`,
    lead2: `${url}/audio/atmospheric-lead2.mp3`,
    lead3: `${url}/audio/atmospheric-lead3.mp3`,
    drone: `${url}/audio/atmospheric-drone.mp3`,
  });
});

router.get("/hyacintho", (req, res) => {
  res.status(200).json({
    id: "2",
    name: "atmospheric",
    bass: `${url}/audio/hyacintho-bass.mp3`,
    pad1: `${url}/audio/hyacintho-pad1.mp3`,
    pad2: `${url}/audio/hyacintho-pad2.mp3`,
    arp: `${url}/audio/hyacintho-arp.mp3`,
    lead1: `${url}/audio/hyacintho-lead1.mp3`,
    lead2: `${url}/audio/hyacintho-lead2.mp3`,
    lead3: `${url}/audio/hyacintho-lead3.mp3`,
    drone: `${url}/audio/hyacintho-drone.mp3`,
  });
});

module.exports = router;
