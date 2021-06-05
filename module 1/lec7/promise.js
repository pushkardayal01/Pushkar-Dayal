let fs=require("fs");

let pendingpromise=fs.promises.readFile("./f1.txt");
console.log(pendingpromise);

pendingpromise.then(function(data)
{
    console.log("run ho gya....");
    console.log(pendingpromise+"");
    console.log(data+" ");
});

pendingpromise.catch(function(error)
{
    console.log("run nhi  ho rha....");
    //console.log(pendingpromise+"");
    //console.log(data+" ");
    console.log(error);
});
