let Link = "https://www.91mobiles.com/upcoming-mobiles-in-india";

const request = require("request");
const cheerio = require("cheerio");


request(Link , cb);

function cb(error ,response ,data){
    getdata(data);
}
function getdata(data)
{

    let date;
    let myDocument = cheerio.load(data);

   // console.log(data);
   let alldate=myDocument(".pro_list_date");
   //console.log(alldate);
//    for(let i=0;i<alldate.length;i++)
//    {
//        date=myDocument(alldata).text();
//        console.log(date);
//    }
    for(let i = 0; i<alldate.length ; i++){
        //let onedate = myDocument(bothBatsmanTable[i]);
        date = myDocument(alldate[i]).text();
        let x=date.split(":");
        console.log(x[1]);
        //console.log(date);
        if(x[1]=='Jun 2021')
        {
            //console.log("ho gya...");
            
        }
    }
}