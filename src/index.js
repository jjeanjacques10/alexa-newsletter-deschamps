require('dotenv').config();

const getNews = require('./getNews.js');
const uploadJson = require('./uploadJson.js');
const fs = require('fs');
const path = require('path');

getNews.then(data => {
    uploadJson(data);
    
    data = JSON.stringify(data);

    fs.writeFile(path.join(__dirname, '..', 'feed.json'), data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
})
