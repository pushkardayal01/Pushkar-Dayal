let content=process.argv.slice(2);
let fs =require("fs");
//console.log(content);

let files=[];
let flag=[];
for(let i=0;i<content.length;i++)
{
    if(content[i].startsWith("-"))
    {
        flag.push(content[i]);
    }
    else
    {
        files.push(content[i]);
    }
}
//console.log(files);
//console.log(flag);
let filekadata="";
for(let i=0;i<files.length;i++)
{
    filekadata+=fs.readFileSync(files[i]);

}
console.log(filekadata);
