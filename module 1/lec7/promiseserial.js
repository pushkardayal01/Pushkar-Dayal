let fs=require("fs");

let f1kadata=fs.promises.readFile("./f1.txt");



f1kadata.then(function(data){
    console.log(data+"");
    let f2kadata=fs.promises.readFile("./f2.txt");
    f2kadata.then(function(data){
        console.log(data+"");
        let f3kadata=fs.promises.readFile("./f3.txt");
        f3kadata.then(function(data){
            console.log(data+"");
        });
    });

});


