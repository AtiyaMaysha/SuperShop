const express = require("express");
const path = require("path");

const app = express();

app.use("/JS", express.static(path.resolve(__dirname, "Frontend", "JS")));
app.use("/CSS", express.static(path.resolve(__dirname, "Frontend", "CSS")));

app.get("/dashboard/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend","index.html"))
});

app.listen(process.env.PORT || 5500, () => console.log("server running---"));