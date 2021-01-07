const { GoogleSpreadsheet } = require('google-spreadsheet')
const cheerio = require('cheerio')
const creds = require('./client_secret.json')

async function readSpreadSheet() {
    const doc = new GoogleSpreadsheet('1Q21v72WDgpdSaF3qu5SjUulHSBIKTzds0lOrI3xsPTM')

    await doc.useServiceAccountAuth(creds);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    // Get last news
    return cleanText(rows[(rows.length - 1)].Message);
}

function cleanText(email) {
    const $ = cheerio.load(email)

    var news = $('p').text();

    news = news.replace(/\.(?!\d)/g, '. ');

    const regex = /(Confere lá:\s+Link Afiliado)|:\s+Link Afiliado/gi;

    return news.replace(regex, '');
}

module.exports = readSpreadSheet();