let fs =require("fs");
let f1kadata=fs.readFileSync("./f1.txt","utf-8");
//console.log(f1kadata+"");


//let data=f1kadata.split("\n\r");
//console.log(data);
let data=f1kadata.split("\r\n");
console.log(data);

// let fs = require("fs");

// let f1KaData = fs.readFileSync("./f1.txt");


// f1KaData = f1KaData+"";

// // console.log(f1KaData);

// // -s => removes extra spaces
console.log("s flag");
// let data=f1KaData.split("\r\n");
// console.log(data);

//-s flag implementation
function removespace(data)
{
    let arr=[];
    let count=0;
    for(let i=0;i<data.length;i++)
    {
        if(data[i]=='')
        {
            count++;
            if(count<=1)
            {
                arr.push(data[i]);
            }
        }
        else
        {
            arr.push(data[i]);
            count=0;
        }
    }
    return arr;
}
let a=removespace(data);
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}

//-n flag implementation
console.log("n flag");
// function removespacenflag(data)
// {
//     let ab=[];
//     let count=1;
//     //let number=1;
//     for(let i=0;i<data.length;i++)
//     {
//         let c=`${count}.${data[i]}`;
//         ab.push(c);
//         //console.log(count,".",data[i]);
//         count++;
//     }
//     return ab;
// }
// int nflag=removespacenflag(data);
// for(int i=0;i<nflag.length;i++)
// {
//     console.log(nflag[i]);
// }

//-b flag implementation
console.log("b flag");
function removespacebflag(data)
{
    let a=[];
    let count=0;
    let number=1;
    for(let i=0;i<data.length;i++)
    {
       if(data[i]=="")
       {
            a.push("\n");
          
       }
       else
       {
           let c=`${number}.${data[i]}`;
           a.push(c);
           number++;
           count=0;
       }
    }
    return a;
}
let arr=removespacebflag(data);
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
