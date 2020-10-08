const express = require("express");

var app = express();
var port = process.env.PORT || 80;
app.use(express.static('./dist'));
app.listen(port);

process.stdin.setRawMode(true);
process.stdin.on("data", data=>{process.exit()});

console.log("\n \x1b[94m server started \x1b[0m \n\n *****************************************\n\n\t http://localhost:"+port);
console.log("\n *****************************************\n");