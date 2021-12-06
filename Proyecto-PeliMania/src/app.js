const express = require("express");
const app = express();
const path = require("path");


app.set("port", 3000);
app.listen(app.get("port"), ()=> console.log("Listening on port http://localhost:" + app.get("port")));

app.get("/", (req,res)=> res.sendFile(path.resolve(__dirname, "./views/index.html")));

app.use(express.static(path.resolve(__dirname, "./public")));



