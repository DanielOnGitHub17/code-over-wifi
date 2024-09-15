const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);


const filePath = "../settings.json";

async function getSettings() {
    try{
        const data = await readFilePromise(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.log(`${err}. Retrying...`);
        return getSettings();
    }
};