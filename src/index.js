const readSpreadSheet = require('./readSpreadSheet.js');
const teste = require('./generateJson.js');
const fs = require('fs');

teste.then(data => {
    data = JSON.stringify(data);
    fs.writeFile('feed.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
})


/*  async function handle(handlerInput) {
    const speakOutput = await readSpreadSheet.then((value) => {
        return value;
    });

    return speakOutput;
}

handle().then((value) => {
    console.log(value);
})  */