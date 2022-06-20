const fs = require("fs");
class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}
//Reader that listening file and return the content
module.exports = Reader
