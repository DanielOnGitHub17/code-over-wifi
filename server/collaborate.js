const fs = require("fs");
const path = require("path");


console.log(__dirname)
function startFile(fileName){
    const content = '# Some content!';
    fs.writeFile(`${__dirname}/../codes/${fileName}`, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      return;
    });
};

startFile("Hi.py")