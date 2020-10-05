const express = require("express");

var app = express();

app.use(express.static('./dist'));
app.listen(80);

process.stdin.setRawMode(true);
process.stdin.on("data", data=>{process.exit()});

console.log("\n \x1b[94m server started \x1b[0m");