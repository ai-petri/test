const fs = require("fs");
const path = require("path");



copy("./public", "./dist")
function copy(item, destination)
{
    if(fs.lstatSync(item).isDirectory())
    {
         if(!fs.existsSync(destination))
        {
            fs.mkdirSync(destination);
        }
        let files = fs.readdirSync(item);
        for(let file of files)
        {
            copy(path.join(item, file),path.join(destination, file));
        }
    }
    else
    {
        fs.copyFileSync(item, destination)
    }
}