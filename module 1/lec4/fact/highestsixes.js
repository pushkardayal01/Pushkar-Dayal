let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

const request = require("request");
const cheerio = require("cheerio");


request(matchLink , cb);

function cb(error ,response ,data){
    getHighestSixes(data);
}

function getHighestSixes(data){
    let highestSixes;
    let batsmanName;
    let strikeRate;

    let myDocument = cheerio.load(data);
    let bothBatsmanTable = myDocument(".table.batsman");
    console.log(bothBatsmanTable);
}