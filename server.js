const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
const app = express();


app.use(cors());

app.listen(process.env.PORT||4000, () => {
    console.log("ok");
})

app.get('/download', (req, res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename=youtube.mp3');
    ytdl(URL, {
        format: 'm4a',
        quality: 'lowest',
    }).pipe(res);
})