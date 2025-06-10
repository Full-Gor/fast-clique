const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public")); // 📌 Assure-toi que `index.html` est dans `public/`

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(8080, () => {
    console.log("Serveur démarré sur http://localhost:8080");
});
