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
    name: "DNB",
    kick: `${url}:${PORT}/audio/atmospheric-kick.wav`,
    snare: `${url}:${PORT}/audio/atmospheric-snare.wav`,
    hat: `${url}:${PORT}/audio/atmospheric-hat.mp3`,
    cymbal: `${url}:${PORT}/audio/atmospheric-cymbal.wav`,
    tom: `${url}:${PORT}/audio/atmospheric-toms.mp3`,
    drumloop1: `${url}:${PORT}/audio/atmospheric-loop1.mp3`,
    drumloop2: `${url}:${PORT}/audio/atmospheric-loop2.wav`,
    drumloop3: `${url}:${PORT}/audio/atmospheric-loop3.wav`,
    bass: `${url}:${PORT}/audio/atmospheric-bass.wav`,
    pad1: `${url}:${PORT}/audio/atmospheric-pad1.wav`,
    pad2: `${url}:${PORT}/audio/atmospheric-pad3.mp3`,
    arp: `${url}:${PORT}/audio/atmospheric-arp.wav`,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
